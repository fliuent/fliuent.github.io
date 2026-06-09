# Editing Guide

This site is designed so normal website edits can happen in one place without changing React components.

## The main file to edit

Edit this file for website content:

```text
src/content/siteContent.ts
```

That file contains the profile text, navigation labels, section titles, social links, education items, projects, teaching entries, hobbies, and other editable labels used by the site.

## How to change the avatar

1. Add your new image to this folder. If the folder does not exist yet, create it first:

   ```text
   public/images/
   ```

2. Use a simple file name, for example:

   ```text
   profile-avatar.png
   ```

3. Open `src/content/siteContent.ts`.
4. Find this line inside `profile`:

   ```ts
   avatarUrl: "/images/profile-avatar.png",
   ```

5. Change the file name if needed. For example:

   ```ts
   avatarUrl: "/images/new-avatar.jpg",
   ```

Keep the path starting with `/images/` when the image is stored in `public/images/`.

## How to add or remove a project

Open `src/content/siteContent.ts` and find the `projects` list.

Each project looks like this:

```ts
{
  id: "proj-1",
  title: "To Be Done.",
  role: "",
  period: "",
  description: "",
}
```

To add a project, copy one whole block, paste it inside the `projects` list, and change the values. Make sure each project has a unique `id`, such as `proj-2` or `proj-my-topic`.

To remove a project, delete one whole block, including its opening `{` and closing `}`.

## How to add or remove a social link

Open `src/content/siteContent.ts` and find the `profile` section.

Current social/contact fields include:

```ts
github: "https://github.com/wxdins",
linkedin: "https://linkedin.com/in/fengkai-liu",
website: "https://fengkai.connect.ust.hk",
email: "fliuar@connect.ust.hk",
```

To hide a social link, leave its value empty:

```ts
github: "",
```

Do not delete the field name unless you also update the website code.

## How to edit text safely

- Keep quotation marks around text values.
- Keep commas at the end of lines inside objects and lists.
- Do not delete `id` fields from list items.
- Do not delete opening or closing braces: `{`, `}`.
- Do not delete opening or closing brackets: `[`, `]`.
- If you need an apostrophe inside text, double quotes are safest:

  ```ts
  bio: "I'm editing this text safely.",
  ```

## How to commit changes on GitHub

1. Open the file you want to edit on GitHub.
2. Click the pencil icon to edit.
3. Make your content changes.
4. Scroll to **Commit changes**.
5. Write a short message, such as `Update homepage bio`.
6. Commit directly to a branch or open a pull request.
7. After the change is merged to `main`, GitHub Pages will rebuild and deploy the site.

## What not to delete

Do not delete these unless you know exactly why:

- `src/content/siteContent.ts` — main editable content file.
- `public/images/` — editable website images, once you create or upload that folder.
- `src/` — React website code.
- `package.json` — build and dependency settings.
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow.
- `fengkai-liu-portfolio.zip` — retained source archive/backup.
- `index.html` — Vite entry file required for the site.
