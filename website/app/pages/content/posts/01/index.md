---
layout: post/description
permalink: /posts/01/
title: '01'
---
<div class="description__text-block">
  <div class="description__title">{{site.data.posts.post-1.global.title}}</div>
  <div class="description__message">{{site.data.posts.post-1.details-info.description}}</div>
</div>
<div class="gallery">
  {% for image_path in site.data.posts.post-1.details-info.images-paths %}
    <a href="{{image_path}}">
      <img src="{{image_path}}" alt="">
    </a>
  {% endfor %}
</div>
<a class="btn description-btn" href="./details">Содержимое</a>
