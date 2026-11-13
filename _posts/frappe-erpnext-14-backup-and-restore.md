---
title: 'Frappe ERPNext 14 — backup and restore'
excerpt: 'Backup a live site and restore in a local docker setup.'
date: '2023-01-08T23:01:48.000Z'
author:
  name: Greg Hermo
  picture: '/assets/blog/authors/jj.jpeg'
tags: ['erpnext', 'frappe']
mediumUrl: 'https://greghermo.medium.com/frappe-erpnext-14-backup-and-restore-f67f6bfc52ab'
---

Backup a live site and restore in a local docker setup.

## General Setup

**Live site** — I’m using ERPNext version 14 setup in a DigitalOcean droplet with Ubuntu 22.

**Restore site** — I’m using ERPNext version 14 setup in a docker container.

**Backup setup** — By default, ERPNext is set to back-up your database and files. We will rely on this functionality to do the next steps.

## Get backup files

First let’s SSH into our server and create a fresh backup.

```
~/frappe-bench$ bench --site example.com backup --with-files --compress --backup-path /tmp/
Backup Summary for example.com at 2023-01-08 11:55:38.719601
Config  : /tmp/20230108_115536-example.com-site_config_backup.json 389.0B
Database: /tmp/20230108_115536-example.com-database.sql.gz         2.9MiB
Public  : /tmp/20230108_115536-example.com-files.tgz               230.2KiB
Private : /tmp/20230108_115536-example.com-private-files.tgz       8.9KiB
Backup for Site example.com has been successfully completed with files
```

Once done, we can download the files.

## Restore

Copy the files over to our docker setup.

```
$ docker cp <backup_folder> <container_name>:/tmp
```

Run restore command

```
~/frappe-bench$ bench --site localhost restore /tmp/20230108/20230108_115536-example.com-database.sql --with-public-files /tmp/20230108/20230108_115536-example.com-files.tgz --with-private-files=/tmp/20230108/20230108_115536-example.com-private-files.tgz --force
MySQL root password:
<enter password>
...
...
...
App frappe already installed
*** Scheduler is enabled ***
Site localhost has been restored with files
```

## Summary

In my experience, it was very straight forward.

**DigitalOcean Setup (Live)**

```
~/frappe-bench$ bench version --format plain
erpnext 14.12.0 version-14 (aab856c)
frappe 14.21.1 version-14 (aa9d5e4)
hrms 1.0.0 develop (6f2294b)
payments 0.0.1 develop (7b2f57f)
```

**Docker Setup**

```
~/frappe-bench$ bench version --format plain
erpnext 14.12.0 version-14 (aab856c)
frappe 14.21.1 version-14 (aa9d5e4)
hrms 1.0.0 develop (6f2294b)
payments 0.0.1 develop (7b2f57f)
```
