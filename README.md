# B Agency Next.js Template

This is an animated, editable Next.js website template based on the uploaded UI video style.

The published page is a portfolio design demo. Brand placeholders, fictional
testimonials, mockups, prices and business metrics are explicitly illustrative.
There is no live builder, booking flow or paid service. Replace sample claims
with verified information before adapting it for an operating business.

## What is included

- Custom "B" logo in the header and footer
- Dark animated hero section with grid, glow, and large background text
- Trusted brand marquee
- Bento service cards
- Builder and prompt section
- Project cards
- Testimonials marquee
- Scaling, technology, and comparison sections
- Pricing section
- Founder section
- FAQ accordion
- Dark CTA footer
- Responsive layout for desktop, tablet, and mobile

## Main editing rule

For normal content changes, edit this file only:

```txt
data/siteContent.ts
```

That file controls the brand name, logo letter, navigation, hero text, services, projects, testimonials, pricing, FAQ, footer, and most button labels.

Do not edit these files unless you want layout, animation, or design changes:

```txt
app/page.tsx
app/globals.css
components/
```

## How to run the site

Install Node.js LTS first. Then run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. It is usually:

```txt
http://localhost:3000
```

## How to edit later with AI

Send the folder or repo to an AI and use this prompt:

```txt
Change this website for [business type]. For content changes, edit only data/siteContent.ts. Keep the layout, animations, section order, and component files unchanged. Keep the same object shape and update the text, pricing, services, FAQ, testimonials, and contact wording to match the new business.
```

A detailed AI guide is included here:

```txt
AI_EDITING_GUIDE.txt
```

## How to upload to GitHub without VS Code

1. Create a new repository on GitHub.
2. Open the repository in your browser.
3. Click "Add file" and choose "Upload files".
4. Drag the contents of this project folder into GitHub.
5. Commit the files.
6. To publish it, connect the GitHub repository to Vercel and deploy it as a Next.js project.

Upload the contents inside the folder, not the zip file itself.
