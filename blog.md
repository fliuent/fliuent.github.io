---
layout: default
title: Blog / Notes
permalink: /blog/
---

<section class="page-hero container">
  <!-- Replace "NA" with a blog description later. -->
  <p class="eyebrow">Blog / Notes</p>
  <h1>NA</h1>
  <p>NA</p>
</section>

<section class="section container">
  <h2>Categories</h2>
  <!-- Keep or edit these beginner-friendly categories as your blog grows. -->
  <ul class="tag-list">
    <li>Academic Notes</li>
    <li>Life</li>
    <li>Travel</li>
    <li>Hobbies</li>
    <li>Photos</li>
    <li>Videos</li>
  </ul>
</section>

<section class="section container">
  <h2>Posts</h2>
  <div class="post-list">
    {% for post in site.posts %}
      <article class="card post-card">
        <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html }}</p>
        <div class="label-row">
          {% for category in post.categories %}<span class="label">{{ category }}</span>{% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>
