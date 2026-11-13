---
title: 'A faster Laravel Lazy Query Method'
excerpt: 'When working with big numbers of data in MySQL (10M+ records) or 300GB+ sized database tables, we often would reach for lazyById or lazy'
coverImage: '/assets/blog/a-faster-laravel-lazy-query-method/01-1-rdEvdbDI02uFzwz3JSNX5Q.png'
date: '2022-11-24T01:27:19.000Z'
author:
  name: Greg Hermo
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/a-faster-laravel-lazy-query-method/01-1-rdEvdbDI02uFzwz3JSNX5Q.png'
tags: ['mysql', 'laravel']
mediumUrl: 'https://greghermo.medium.com/a-faster-laravel-lazy-query-method-d08d2587d2d7'
---

![Taken from stackoverflow](/assets/blog/a-faster-laravel-lazy-query-method/01-1-rdEvdbDI02uFzwz3JSNX5Q.png)

_Taken from [stackoverflow](https://stackoverflow.com/questions/4481388/why-does-mysql-higher-limit-offset-slow-the-query-down)_

When working with big numbers of data in MySQL (10M+ records) or 300GB+ sized database tables, we often would reach for lazyById or lazy

Laravel provides these wonderful tools to easily iterate through all the records. However there’s a limit where we can use these helpers.

## LazyById aka “seek method”

At its core, lazyById uses both the the ID column and mysql limit to chunk the results.

```
select * from users where id > 1000 order by id limit 1000
select * from users where id > $lastId order by id limit 1000
...
```

This is quite powerful and should be enough for most cases. However, in my experience, it can also become very slow. For instance:

```
select `id`, `email`, `name` from linkedin_profiles 
where `credits` between 5001 and 99999999 
  and `active` = 1 
order by `credits` asc 
limit 1000
```

I am not quite sure why this is slow so I tried using different indexes.

- order by id (Primary — id)
- order by active (ix_active — active)
- order by credits (ix_credits — credits, active) composite index

All these 3 columns are indexed but the fastest result came from using the **ix_credits** index. My hunch is because there’s a lot of data, using the composite index yielded the fastest result.

The issue with this though is that I cannot use the seek method since credits are not unique unlike ID.

Having encountered that I did check the helper lazy:

```
User::query()->whereBetween('credits', [50,99])->orderBy('credits')->lazy();
```

## Lazy aka “offset pagination”

Lazy on the other hand uses offset and limit.

```
select * from users where id > 1000 limit 1000 offset 0
select * from users where id > 1000 limit 1000 offset 1000
```

The downside for this is quite known. The further your offset grows the slower the query becomes.

```
select id, name from users where credits between 50 and 99 limit 1000 offset 0
-- 197ms
select id, name from users where credits between 50 and 99 limit 1000 offset 100000
-- 11.1s
```

## Late row lookup

This is where MySQL **late row lookup** comes in. Essentially we want to optimize our query by avoiding row lookups on the ones we already offset. This is explained very well on this [page](https://explainextended.com/2009/10/23/mysql-order-by-limit-performance-late-row-lookups/)

This method gets the ID first and then we do a join query to get the columns we need. This eliminates doing row lookups beyond the limit we specify.

```
-- get IDs
with tmp as (select id from users where credits between 50 and 99 and active=1 order by credits limit 1000 offset 100000)
-- get columns
select u.id, u.name, u.email from users u join tmp on tmp.id = u.id

-- we can also write this as
select id, name, email from users u inner join 
  (select id from users where credits between 50 and 99 and active=1
    limit 1000 offset 100000
  ) tmp on tmp.id = u.id
```

Personally, this has saved me and my team a lot of time processing large datasets. Here’s how it might look in Laravel.

```
$tmp = User::whereBetween('credits', [50,99])->offset(150000)->limit(1000);
$users = User::joinSub($tmp, 'tmp', fn ($join) => $join->on('tmp.id', 'users.id'))
          ->select(['id', 'name']);
```

## LatezyById

Now here’s how a “faster” lazy implementation might look like in a Laravel model scope. Let’s call it latezyById

```
class User extends Model {

    ...
    ...
    ...

    public function scopeLatezyById($query, $chunkSize = 1000, callable $q = null): LazyCollection
    {
        if ($chunkSize < 1) {
            throw new \Exception('The chunk size should be at least 1');
        }

        return LazyCollection::make(function () use ($query, $chunkSize, $q) {
            $page = 0;

            do {
                $clone = clone $query;

                $tmpQuery = $q ? $q(clone $query) : clone $query;

                $tmp = $tmpQuery->select('id as tmpId')->limit($chunkSize)->offset($chunkSize * $page);
                $results = $clone->joinSub($tmp, 'tmp', fn ($join) => $join->on('tmpId', 'id'))->get();

                foreach ($results as $result) {
                    yield $result;
                }

                $page++;
            } while ($results->count() >= $chunkSize);
        });
    }
}

User::select(['id','email','name'])
  ->latezyById(1000, fn($q) => $q
    ->whereBetween('credits', [50,99])
    ->where('active', 1)
    ->orderBy('credits'))
```
