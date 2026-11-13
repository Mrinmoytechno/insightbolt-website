# Publishing a new InsightBolt project

Add one new `.json` file to this folder for each project.

The website automatically:

- Generates `/insights/<slug>` for the project.
- Adds it to `/insights` and its search/filter options.
- Sorts the homepage carousel by date.
- Displays the latest ten projects on the homepage.

## Weekly workflow

1. Copy the project JSON structure from `the-whole-truth-foods.json`.
2. Rename the copy to a unique kebab-case filename.
   Example: `brand-name-analysis.json`
3. Update the project-specific fields:
   - slug
   - title
   - brand
   - brandInitials
   - date
   - type
   - industry
   - tags
   - description
   - sections
4. Add the official brand logo under:

   public/images/insights/<slug>/logo.png

5. Set the logo property to:

   /images/insights/<slug>/logo.png

6. Set `published` to `true` when ready.
7. Commit and deploy.

## Content structure

- `sections`: Ordered content sections.
- `creatives`: Optional campaign concepts.
- `sources`: Optional research sources.
- `limitations`: Optional assumptions and verification notes.
- `logo`: Optional local logo asset.

If no logo is provided, the website displays the
brand initials.

## Important

This system uses JSON rather than MDX.

This keeps publishing simple, avoids additional
runtime dependencies and allows projects to be
added through individual structured content files.