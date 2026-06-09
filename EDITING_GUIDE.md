# Editing Guide

This website is now set up so that the main text and list content live in one editable file:

```text
src/content/siteContent.ts
```

You usually do **not** need to edit React component files for normal content updates.

## Before you edit

1. Open `src/content/siteContent.ts`.
2. Change only the words inside quotes unless you are comfortable editing TypeScript.
3. Keep commas, brackets, and braces in place.
4. Do not add image files or other binary files in this repository unless you are intentionally making a separate media update.

## Common edits

### Name, subtitle, bio, avatar, and social links

Find `initialProfile` in `src/content/siteContent.ts`.

You can edit:

- `name` — your displayed name.
- `title` — the subtitle shown under your name.
- `bio` — the biography/about paragraph.
- `avatarPath` — the editable avatar file path string.
- `email`, `github`, `linkedin`, and `website` — contact and social links.

The current avatar uses the existing SVG already in the project. This PR does not add a new avatar image. If you change `avatarPath`, make sure the referenced file already exists and is web-friendly.

### Navigation labels and section titles

Find `siteCopy` in `src/content/siteContent.ts`.

- Edit `navigation` to change sidebar labels such as `Home`, `Education`, `Teaching`, and `Hobbies`.
- Edit `sections` to change headings such as `Biography`, `Personal Projects`, `Awards`, and `Teaching Experience`.

Tip: keep navigation `id` values unchanged (`home`, `education`, `teaching`, `hobby`) unless you are also updating the app routing logic.

### Education entries

Find `initialDegrees`.

Each education entry is one object inside the list. You can edit university name, degree name, field, location, period, GPA, and supervisor.

### Courses and awards

Find:

- `initialCourseCategories` for coursework.
- `initialAwards` for awards and scholarships.

To add another award, copy an existing award object, paste it inside the list, update the `id`, then edit the title, institution, and date.

### Projects

Find `initialProjects`.

Each project can include:

- `title`
- `role`
- `period`
- `description`
- optional `url`
- optional `keyFeatures`

The placeholder project uses `To Be Done.` so the site can show the same empty-state layout until real projects are added.

### Teaching entries

Find `initialTeaching`.

Each teaching entry controls one row in the teaching table. You can edit course name, instructor, institution, period, role, student count, and description.

Teaching section intro text, button labels, duties, and evaluation summaries are in `siteCopy.teaching`.

### Hobbies and life content

Find `initialHobbies`.

Each hobby card has:

- `title`
- `category`
- `description`
- `imageUrl`
- `iconName`

For `iconName`, use one of the icons already supported by the component, such as `Sliders`, `Heart`, `Compass`, or `Telescope`.

## Preview and check your edits

After editing, run:

```bash
npm run build
```

If the build succeeds, your content file is still valid.

## If something breaks

Most editing mistakes are caused by a missing comma or quote. Check the line you edited and compare it with nearby entries.
