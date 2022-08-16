---
layout: default
permalink: /posts/01/
title: '01'
---
<link rel="stylesheet" href="/assets/styles/css/styles.css" />
<script src="/assets/scripts/gallery-service.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.3.2/js/lightgallery.js"></script>
<script src="/assets/scripts/gallery-service.js"></script>
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
