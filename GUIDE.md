# Building the "Teens Trust AI" Research Website
## A Step-by-Step Guide Using Cursor + Claude Code

---

## Overview

This guide walks you through building a research showcase website using **Claude Code** (for scaffolding, architecture, and multi-file generation) and **Cursor** (for visual refinement, styling, and interactive editing). You'll learn the "use both" workflow that many developers adopt in 2026.

### What You'll Build
A multi-page Next.js website to share the LinkedKey Foundation / Leading Tomorrow research project: *"Teens Trust AI More Than They Should."*

### Prerequisites
- **Node.js** 18+ installed ([nodejs.org](https://nodejs.org))
- **Cursor** installed ([cursor.com](https://cursor.com))
- **Claude Code** installed (run `npm install -g @anthropic-ai/claude-code` in terminal)
- A terminal (Mac Terminal, Windows PowerShell, or iTerm2)

---

## Phase 1: Project Setup with Claude Code

Claude Code excels at scaffolding entire projects. Open your **terminal** (not Cursor yet).

### Step 1.1 — Create the project folder

```bash
mkdir teens-trust-ai-website
cd teens-trust-ai-website
```

### Step 1.2 — Copy the starter files into the folder

Copy the entire contents of the `project/` folder from this starter kit into `teens-trust-ai-website/`. This gives you:

```
teens-trust-ai-website/
├── CLAUDE.md          ← Project brief for Claude Code (critical!)
├── package.json       ← Dependencies
├── public/
│   └── images/        ← The 12 project photos (already renamed)
│       ├── group-photo-stage.jpg
│       ├── classroom-session-1.jpg
│       ├── classroom-presentation.jpg
│       └── ... (9 more)
└── content/
    └── research-data.json  ← All survey data from the report
```

### Step 1.3 — Launch Claude Code and scaffold the site

```bash
claude
```

Once Claude Code starts, give it this prompt:

```
Read CLAUDE.md and research-data.json carefully.
Then scaffold a complete Next.js 14 website with App Router
using the sitemap and design specs in CLAUDE.md.

Create all pages, components, and layouts. Use Tailwind CSS.
Include the interactive charts using Recharts.
Make sure all 12 photos in public/images/ are used.

Start by installing dependencies, then create the full project structure.
```

**What to expect:** Claude Code will:
1. Run `npm install` (or create the project via `npx create-next-app`)
2. Create 15-25 files across multiple directories
3. Set up routing, layouts, components, and data
4. This may take 2-5 minutes

### Step 1.4 — Review what Claude Code generated

After it finishes, ask:

```
Show me the project structure and summarize what you created.
```

Then verify it runs:

```
Run npm run dev and confirm the site loads at localhost:3000
```

> **Tip:** If Claude Code hits any errors, just paste the error message back and ask it to fix it. Claude Code is great at self-correcting.

---

## Phase 2: Open in Cursor for Visual Refinement

Now switch to **Cursor** for the hands-on design work.

### Step 2.1 — Open the project in Cursor

```bash
cursor .
```

Or launch Cursor and use File → Open Folder.

### Step 2.2 — Start the dev server

Open Cursor's integrated terminal (Ctrl+` or Cmd+`) and run:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser (or use Cursor's built-in browser preview if available).

### Step 2.3 — Visual refinements with Cursor's AI

Now use Cursor's **Composer** (Cmd+K or Ctrl+K) or **Chat** (Cmd+L or Ctrl+L) for interactive styling. Here are example prompts to try:

**Hero section styling:**
> Select the hero section in `app/page.tsx`, press Cmd+K, and type:
> "Make this hero section full-viewport height with the group-photo-stage.jpg as a dark overlay background. Add a fade-in animation for the title. The stat '55% use AI weekly' should appear as a large animated counter."

**Chart interactivity:**
> Open the findings page component, Cmd+K:
> "Add hover tooltips to all Recharts bar charts. Use an orange color scheme (#F59E0B) to match the report. Add smooth entrance animations."

**Photo gallery:**
> "Create a masonry-style photo grid for the Team page using the 12 images in public/images/. Add a lightbox effect on click."

**Navigation polish:**
> "Make the navbar sticky with a frosted glass blur effect. Add smooth scroll to section anchors. Highlight the active section in the nav."

**Interview quotes:**
> "Style the Student Voices section as large pull-quote cards with a slide-in animation on scroll. Use a handwriting-style font for the quotes."

### Step 2.4 — Use Cursor's Tab completions

As you edit JSX/TSX files, Cursor's autocomplete will suggest code as you type. This is especially useful for:
- Adding Tailwind classes (type `className="` and Cursor suggests)
- Writing JSX structure
- Completing component props

---

## Phase 3: Complex Features with Claude Code

When you need to add something that spans many files, switch back to Claude Code in your terminal.

### Step 3.1 — Add responsive design across all pages

```bash
claude
```

Then:

```
Review all pages and components. Make sure every page is fully
responsive: mobile (< 640px), tablet (640-1024px), and desktop (> 1024px).
The charts should stack vertically on mobile.
The photo grid should go from 3 columns to 2 to 1.
Test by resizing the browser.
```

### Step 3.2 — Add SEO and Open Graph metadata

```
Add comprehensive SEO to every page:
- Proper <title> and <meta description> for each page
- Open Graph tags with the group-photo-stage.jpg as the og:image
- A sitemap.xml and robots.txt
- Structured data (JSON-LD) for the research article
```

### Step 3.3 — Add the PDF download feature

```
Add a "Download Full Report" button on the Recommendations page
that links to /FinalReport1205.pdf in the public folder.
Style it as a prominent call-to-action.
```

### Step 3.4 — Performance optimization

```
Optimize all images using Next.js <Image> component with proper
width, height, and priority attributes. Add lazy loading for
below-the-fold images. Enable blur placeholders.
```

---

## Phase 4: Final Polish in Cursor

Return to Cursor for the finishing touches.

### Step 4.1 — Micro-interactions and animations

Use Cmd+K in Cursor on specific components:
- "Add a smooth scroll progress bar at the top of the Findings page"
- "Add a subtle parallax effect on the hero background image"
- "Make the stat numbers count up when they scroll into view"

### Step 4.2 — Cross-browser testing

Open the site in Chrome, Safari, and Firefox. If anything looks off, describe the issue in Cursor's chat and let it fix it.

### Step 4.3 — Final review with Claude Code

Back in terminal:

```
Do a final review of the entire codebase:
1. Check for accessibility issues (ARIA labels, alt text, color contrast)
2. Check for any TypeScript errors
3. Make sure all links work and all images load
4. Run a Lighthouse audit if possible
```

---

## Phase 5: Deployment

### Option A: Vercel (Recommended for Next.js)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live in under a minute.

### Option B: GitHub Pages (Static Export)

In `next.config.js`, add:
```js
const nextConfig = {
  output: 'export',
}
```

Then:
```bash
npm run build
# Upload the `out/` folder to GitHub Pages
```

### Option C: Netlify

```bash
npm run build
# Drag the `.next` folder to netlify.com/drop
```

---

## Quick Reference: When to Use Which Tool

| Task | Use | Why |
|------|-----|-----|
| Scaffold entire project | **Claude Code** | Multi-file generation |
| Install dependencies | **Claude Code** | Terminal-native |
| Style a specific component | **Cursor** | Live preview + tab completion |
| Add feature across 10+ files | **Claude Code** | Cross-file reasoning |
| Tweak CSS/colors/spacing | **Cursor** | Instant visual feedback |
| Debug a build error | **Claude Code** | Reads full error context |
| Write responsive breakpoints | **Cursor** | See changes in real-time |
| Add SEO/metadata to all pages | **Claude Code** | Repetitive multi-file task |
| Final visual polish | **Cursor** | Interactive fine-tuning |

---

## Troubleshooting

**Claude Code isn't reading my CLAUDE.md:**
Make sure CLAUDE.md is in the project root (same level as package.json). Claude Code reads it automatically.

**Cursor isn't showing AI suggestions:**
Check that you're logged in and have Cursor Pro. Press Cmd+L to open the chat panel.

**`npm run dev` fails:**
Ask Claude Code: "Read the error and fix it." It's very good at diagnosing Node.js issues.

**Charts not rendering:**
Make sure Recharts is installed: `npm install recharts`

**Images not showing:**
Next.js serves files from `public/` at the root URL. So `public/images/photo.jpg` becomes `/images/photo.jpg` in your code.

---

## Learning Takeaways

After completing this project, you'll understand:
1. **When to use Claude Code vs Cursor** — architecture vs. refinement
2. **The CLAUDE.md pattern** — how to write a project brief that AI can execute
3. **Next.js App Router** — modern React with file-based routing
4. **Tailwind CSS** — utility-first styling
5. **Recharts** — React charting library for data visualization
6. **Responsive design** — mobile-first approach
7. **Deployment** — shipping a real website to the internet
