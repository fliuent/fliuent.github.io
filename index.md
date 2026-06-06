---
layout: default
title: Home
---

<section class="hero container">
  <div class="hero-text">
    <!-- Replace each "NA" below with your own information when ready. Do not add private information unless you want it public. -->
    <p class="eyebrow">Academic Personal Homepage</p>
    <h1>NA</h1>
    <p class="subtitle">NA</p>
    <p class="affiliation">NA</p>
    <div class="hero-actions">
      <a class="button" href="#contact">Contact</a>
      <a class="button secondary" href="NA">CV</a>
    </div>
  </div>
  <div class="profile-placeholder" aria-label="Profile photo placeholder">
    <!-- Replace this placeholder with an image in assets/images only after you add your own photo manually. -->
    <span>Profile Photo</span>
    <strong>NA</strong>
    <small>Replace with your own image later.</small>
  </div>
</section>

<section id="about" class="section container">
  <h2>About</h2>
  <!-- Replace this "NA" with your biography later. -->
  <div class="content-card">NA</div>
</section>

<section id="education" class="section container">
  <h2>Education</h2>
  <!-- Replace these "NA" entries with your education history later. -->
  <div class="grid two-column">
    <article class="content-card"><h3>NA</h3><p>NA</p></article>
    <article class="content-card"><h3>NA</h3><p>NA</p></article>
  </div>
</section>

<section id="research" class="section container">
  <h2>Research Interests</h2>
  <!-- Replace these "NA" items with your research interests later. -->
  <ul class="tag-list">
    <li>NA</li>
    <li>NA</li>
    <li>NA</li>
  </ul>
</section>

<section id="projects" class="section container">
  <h2>Projects</h2>
  <!-- Replace these project cards with your own projects later. -->
  <div class="grid three-column">
    <article class="card"><h3>NA</h3><p>NA</p></article>
    <article class="card"><h3>NA</h3><p>NA</p></article>
    <article class="card"><h3>NA</h3><p>NA</p></article>
  </div>
</section>

<section id="publications" class="section container">
  <h2>Publications / Preprints</h2>
  <!-- Replace this "NA" list with citations or preprints later. -->
  <ol class="publication-list">
    <li>NA</li>
    <li>NA</li>
    <li>NA</li>
  </ol>
</section>

<section id="teaching" class="section container">
  <h2>Teaching</h2>
  <!-- Replace these "NA" entries with teaching experience later. -->
  <div class="content-card">NA</div>
</section>

<section id="blog-preview" class="section container">
  <div class="section-heading-row">
    <h2>Blog / Notes</h2>
    <a href="{{ '/blog/' | relative_url }}">View all posts</a>
  </div>
  <div class="grid three-column">
    {% for post in site.posts limit:3 %}
      <article class="card post-card">
        <p class="post-date">{{ post.date | date: "%b %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html }}</p>
        <div class="label-row">
          {% for category in post.categories %}<span class="label">{{ category }}</span>{% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section id="contact" class="section container">
  <h2>Contact</h2>
  <!-- Replace these "NA" contact fields with your preferred public contact information later. -->
  <div class="content-card contact-list">
    <p><strong>Email:</strong> NA</p>
    <p><strong>Office:</strong> NA</p>
    <p><strong>Social Links:</strong> NA</p>
  </div>
</section>
