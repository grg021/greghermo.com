---
title: 'Terminal Cheat Sheet'
excerpt: 'A collection of helpful terminal commands.'
coverImage: '/assets/blog/software-engineering-terminal-cheat-sheet/hannah-joshua-46T6nVjRc2w-unsplash.jpg'
date: '2023-03-21T22:40:32.169Z'
author:
  name: Greg Hermo
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/software-engineering-terminal-cheat-sheet/hannah-joshua-46T6nVjRc2w-unsplash.jpg'
---
   
# Prune local git branch for a project

```sh
git fetch -p ; git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}' | xargs git branch -d
```