---
layout: default
permalink: /posts/
title: Posts
---
<link rel="stylesheet" href="/assets/styles/css/styles.css" />
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
<script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"></script>
<script src="https://kit.fontawesome.com/3ddd0feda7.js" crossorigin="anonymous"></script>
{% for post_hash in site.data.posts %}
{% assign post = post_hash[1] %}
  {% include custom-includes/post.html %}
{% endfor %}
<div id="snipcart" data-api-key="ZjgyNjkwMDAtNGM3MS00ODA5LTgyNjEtMDA4YzVjY2E3MGJmNjM3NzM1OTQ4Mzk2Nzg5Nzkx" hidden></div>
