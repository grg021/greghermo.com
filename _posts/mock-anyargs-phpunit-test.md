---
title: 'Mock AnyArgs PHPUnit Test'
excerpt: 'Unit tests are indeed super helpful but sometimes it is challenging to build them. As much as possible we want to keep them focused and simple. In my case, I made a change to…'
coverImage: '/assets/blog/mock-anyargs-phpunit-test/01-1-9y-Xl3m-aDUaHYvVZ-d8WQ.png'
date: '2022-10-28T03:36:40.000Z'
author:
  name: Greg Hermo
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/mock-anyargs-phpunit-test/01-1-9y-Xl3m-aDUaHYvVZ-d8WQ.png'
tags: ['phpunit', 'php', 'laravel']
mediumUrl: 'https://greghermo.medium.com/mock-anyargs-phpunit-test-35b15e70d7d6'
---

Unit tests are indeed super helpful but sometimes it is challenging to build them. As much as possible we want to keep them focused and simple.  
In my case, I made a change to our company search service for it to support pagination. Hence I created a unit test that asserts for this.

However, the class I was mocking had other parameters. One in particular, the Search parameter which was a final class and could not be easily mocked.

![](/assets/blog/mock-anyargs-phpunit-test/01-1-9y-Xl3m-aDUaHYvVZ-d8WQ.png)

Stepping back, I really did not need to mock this argument as the only argument I was interested on is the third one to ensure that I am passing the correct page.

Looking to make things simpler, I found AnyArgs.

```
use Mockery\Matcher\AnyArgs;
```

Here’s the final test snippet.

```
$this->mock(
    PerformCompanySearchAction::class,
    function (MockInterface $mock) {
        $mock->shouldReceive('__invoke')
            ->with(new AnyArgs(), 50, 2)
            ->once();
    }
);
```

**💡 PHPUnit**  
There are times when you just want to assert for certain parameters only. Other params may not be relevant and sometimes they are down-right impossible to mock and can take up most of the code. (it may be a final class that is not easily mockable)

In cases like this you may opt to use for AnyArgs
