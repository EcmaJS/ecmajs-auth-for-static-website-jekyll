---
layout: default
permalink: /posts
title: Posts
---
{% for post_hash in site.data.posts %}
{% assign post = post_hash[1] %}
  {% include post.html %}
{% endfor %}
