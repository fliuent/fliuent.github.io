# NA

This repository is a simple Jekyll academic personal homepage for GitHub Pages.

## Privacy first

No personal information has been inserted automatically. Every personal information field is currently set to `NA`, including name, title, affiliation, education, research interests, projects, publications, teaching, CV, contact details, social links, photos, hobbies, and personal blog content.

Replace `NA` manually only when you are ready to publish your own information.

## File overview

- `_config.yml`: Jekyll site settings and easy-to-edit placeholder profile fields.
- `index.md`: Homepage sections for About, Education, Research Interests, Projects, Publications / Preprints, Teaching, Blog preview, and Contact.
- `blog.md`: Blog index page listing posts by date and showing category labels.
- `life.md`: Placeholder page for Life, Hobbies, Photos, and Videos.
- `cv.md`: Placeholder CV page with a `NA` CV link.
- `_layouts/default.html`: Main HTML layout used by pages.
- `_layouts/post.html`: Layout used by blog posts.
- `_includes/header.html`: Top navigation bar.
- `_includes/footer.html`: Site footer.
- `assets/css/style.css`: Clean responsive academic styling.
- `assets/images/README.md`: Instructions for adding images.
- `assets/videos/README.md`: Instructions for adding or embedding videos.
- `_posts/2026-01-01-na.md`, `_posts/2026-01-02-na.md`, `_posts/2026-01-03-na.md`: Sample Markdown blog posts with `NA` content.

## How to edit the homepage

Open `index.md` and search for `NA`. Replace each `NA` with your own public information. Comments in the file show where to edit each section.

Common sections to edit:

- Name, subtitle, and affiliation in the hero area.
- About text.
- Education entries.
- Research interests.
- Project cards.
- Publications / Preprints.
- Teaching.
- Contact information.

## How to replace `NA`

1. Open the file you want to edit.
2. Search for `NA`.
3. Replace only the placeholders you want to publish.
4. Leave any unknown, private, or unfinished information as `NA`.
5. Commit and push your changes to GitHub.

## How to add a new blog post

1. Create a new Markdown file in `_posts`.
2. Name it with this format: `YYYY-MM-DD-short-title.md`.
3. Add front matter like this:

```yaml
---
layout: post
title: "NA"
date: 2026-01-04 00:00:00 +0000
categories: ["Academic Notes"]
tags: ["NA"]
excerpt: "NA"
---
```

4. Write the post body below the front matter.
5. Replace `NA` only with information you want public.

Available starter categories are:

- Academic Notes
- Life
- Travel
- Hobbies
- Photos
- Videos

## How to add photos

1. Put image files in `assets/images`.
2. Reference them in Markdown like this:

```markdown
![NA](/assets/images/your-image.jpg)
```

3. Replace the alt text `NA` with a helpful description when ready.
4. Do not upload private photos unless you want them public.

## How to update the CV

1. Add your CV file to the repository, for example `assets/cv/cv.pdf`.
2. Open `cv.md` and replace the `NA` link with your CV path.
3. Open `index.md` and replace the homepage CV button link with the same path.
4. Keep the link as `NA` until you add a real public CV.

## How to edit contact information

Open `index.md` and find the `Contact` section. Replace the `NA` placeholders for email, office, or social links only with contact details you want to publish.

You can also update `_config.yml` if you want to keep contact/profile values in one place.

## How GitHub Pages deployment works

GitHub Pages can build Jekyll sites directly from the root of the main branch.

Beginner steps:

1. Push these files to the main branch.
2. In your GitHub repository, open **Settings**.
3. Go to **Pages**.
4. Set the source to deploy from the main branch and the repository root.
5. GitHub Pages will build the Jekyll site and publish it.
6. Future edits to Markdown files are rebuilt after you commit and push.

No backend, database, Node.js, npm, React, Next.js, Python, or PHP is required.
