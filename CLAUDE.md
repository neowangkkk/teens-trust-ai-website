# CLAUDE.md — Project Brief

## Project: "Teens Trust AI More Than They Should" Research Website

A showcase website for a youth research project on Canadian high school students' AI risk perception, conducted by 25 student researchers from the LinkedKey Foundation's Leading Tomorrow program, mentored by Professor Tao Wang (University of Toronto, Faculty of Information).

## Tech Stack

- **Framework:** Next.js 14 with App Router (`app/` directory)
- **Styling:** Tailwind CSS
- **Charts:** Recharts (for interactive data visualizations)
- **Language:** TypeScript
- **Fonts:** Use Google Fonts — pair a bold display font (e.g., DM Serif Display or Playfair Display) with a clean sans-serif body font (e.g., DM Sans or Source Sans 3)
- **Deployment target:** Static export compatible (Vercel or GitHub Pages)

## Design Direction

- **Tone:** Professional but youthful. This is academic research done BY high school students — it should feel credible and polished, but not stuffy. Think "student-led TED talk" rather than "academic journal."
- **Color palette:** Primary navy/dark blue (#1e293b), accent orange (#F59E0B matching the report charts), white backgrounds, light gray (#f8fafc) for alternating sections. Use the orange sparingly for highlights and data visualizations.
- **Layout:** Clean, generous whitespace. Full-width hero sections. Card-based layouts for findings. Sticky navigation.
- **Photography:** 12 project photos are in `public/images/`. Use them prominently — they tell the human story behind the data.

## Sitemap & Page Structure

### 1. Home Page (`app/page.tsx`)
- **Hero:** Full-viewport, dark overlay on `group-photo-stage.jpg`, title "Teens Trust AI More Than They Should", subtitle about 156 surveys + 32 interviews across 16 GTA schools
- **Key stats strip:** Three animated counters — "55% use AI weekly", "156 surveys", "25 student researchers"
- **Quick overview cards:** Link to the four risk categories (Performance, Privacy, Misinformation, Social/Psychological)
- **CTA buttons:** "Explore Findings" and "Meet the Team"

### 2. About Page (`app/about/page.tsx`)
- Project background: 27 students, June–September 2025, LinkedKey Foundation, UofT mentorship
- Research questions (3 bullet points from the report)
- Methodology: Mixed methods — quantitative survey (156 responses, 16 schools) + qualitative interviews (32 one-on-one)
- Schools list (12 public + 4 private)
- Ethical considerations section
- Photos: `classroom-session-1.jpg`, `classroom-presentation.jpg`

### 3. Findings Page (`app/findings/page.tsx`)
This is the DATA-HEAVY core page. Use a long-scroll layout with sticky sidebar navigation anchoring to sections.

**Section: AI Usage Patterns**
- Bar chart: Usage frequency (Daily 19%, Few times/week 35.5%, Once/week 12.4%, Once/month 12.4%, Rarely/never 20.7%)
- Pie chart: Frequent 55%, Non-frequent 24%, Non-user 21%
- Grouped bar: Female (59.7% frequent) vs Male (51.2% frequent)
- Grouped bar: Grade 9-10 (37% frequent) vs Grade 11-12 (67.6% frequent)
- Bar chart: Tools used — Chatbots 46.4%, Writing aids 31.1%, Art/Design 12.3%, Video/Music 7.7%, Others 1.7%
- Grouped bar: School guidance — Public 50% vs Private 69%; Parent guidance ~43-45% both

**Section: Performance Risks**
- Bar chart: Items A(3.80), B(3.90), C(2.93), D(3.58)
- Comparison bar: Frequent users (3.36) vs Non-frequent (3.69)

**Section: Privacy & Cybersecurity Risks**
- Bar chart: Item A(3.24), Item B(2.60)
- Comparison bar: Frequent (2.61) vs Non-frequent (3.10)

**Section: Misinformation Risks**
- Bar chart: Items A(3.58), B(2.83), C(3.09)
- Comparison bar: Frequent (2.95) vs Non-frequent (3.39)

**Section: Social & Psychological Risks**
- Bar chart: Items A(2.83), B(2.81), C(3.70)
- Comparison bar: Frequent (2.82) vs Non-frequent (3.32)

**Section: Overall Risk Perception**
- Grouped bar: All respondents — Performance 3.55, Privacy 2.92, Misinformation 3.17, Social/Psych 3.11
- Grouped bar: Frequent users — Performance 3.36, Privacy 2.62, Misinformation 2.95, Social/Psych 2.82
- Narrative callout: "The gap between actual risk and perceived risk widens with heavier use"

All charts use the orange (#F59E0B) color scheme. Include hover tooltips showing exact values.

### 4. Student Voices Page (`app/voices/page.tsx`)
- Featured interview quotes as large pull-quote cards
- Quotes to include:
  - "Like basically everything... not like my Social Security number... but everything else, sure." (Data sharing)
  - "How much control do you feel you have over what personal data AI collects about you? 0%." (Privacy)
  - "Using ChatGPT for therapy or coping mechanisms and vent thoughts also works." (Emotional support)
  - "People say don't do that but I don't see the harm in it" (Emotional support)
  - "It's more empathetic and you don't bother anyone" (Emotional support)
  - "ChatGPT will pretty much align with whatever you say." (Validation bias)
  - "Never asks AI for emotional advice — only uses it for academic stuff" (Boundary-setting)
  - "Friends would always be better for personal matters" (Boundary-setting)
  - "AI is not my therapist" (Boundary-setting)
- Group quotes by theme: "Data Sharing Attitudes", "AI as Emotional Support", "Drawing Boundaries"
- Photos: `students-collaborating-1.jpg`, `students-interview.jpg`

### 5. Recommendations Page (`app/recommendations/page.tsx`)
- Three-column card layout: For Schools, For Parents, For Policymakers
- Each card has 3-4 action items from the report
- Prominent "Download Full Report (PDF)" button
- Photo: `students-presenting.jpg`

### 6. Team Page (`app/team/page.tsx`)
- Section: "25 Student Researchers" — list all names from the report in a clean grid
  - Aaron Chen, Isabelle Chung, Ken Deng, Shannon Gao, Elsa Gu, Daniel Hou, Sophia Hou, Tommy Hou, Celine Liu, Sam Liu, Trinity Liu, Aileen Ma, Matteo Pagniello, Tony Pan, Justin Wang, Leo Wang, Xuan He Wang, Nancy Wu, Sabrina Wu, Victoria Xiong, Emily Yang, Gavin Yin, Annabelle Zhang, Sophia Zhao, Edgar Zhou
- Section: "Faculty Mentor" — Professor Tao Wang, Faculty of Information, University of Toronto
- Section: "Organized by" — LinkedKey Foundation with Leading Tomorrow program
- Photo gallery using all remaining photos in a masonry or grid layout
- Photos: `group-photo-stage.jpg`, `classroom-session-1.jpg`, `students-teamwork.jpg`, `students-working-1.jpg`, `students-working-2.jpg`, `students-working-3.jpg`, `students-discussion.jpg`

## Shared Components

### Layout (`app/layout.tsx`)
- Sticky top navbar with links: Home, About, Findings, Student Voices, Recommendations, Team
- Frosted glass blur effect on scroll
- Mobile hamburger menu
- Footer with: "A LinkedKey Foundation × University of Toronto Research Project", copyright, "Download Report" link

### Reusable Components
- `components/Chart.tsx` — wrapper for Recharts with consistent orange theme
- `components/StatCounter.tsx` — animated number counter (count-up on scroll)
- `components/QuoteCard.tsx` — styled interview quote with theme label
- `components/PhotoGrid.tsx` — responsive image grid with lightbox
- `components/SectionNav.tsx` — sticky sidebar nav for the Findings page

## Images in `public/images/`

| Filename | Content | Suggested Use |
|----------|---------|---------------|
| group-photo-stage.jpg | All students on stage at LinkedKey event | Hero background, Team page |
| classroom-session-1.jpg | Students in classroom, wide shot | About page |
| classroom-presentation.jpg | Speaker presenting to students | About page, Recommendations |
| students-collaborating-1.jpg | Two students working together closely | Student Voices |
| students-collaborating-2.jpg | Students discussing at table | Findings page |
| students-working-1.jpg | Students focused on work | Team page gallery |
| students-working-2.jpg | Students at desks | Team page gallery |
| students-working-3.jpg | Students engaged in activity | Team page gallery |
| students-discussion.jpg | Small group discussion | Team page gallery |
| students-interview.jpg | Student interview scene | Student Voices |
| students-presenting.jpg | Student giving presentation | Recommendations |
| students-teamwork.jpg | Team collaboration | Team page gallery |

## Data Source

All chart data is in `content/research-data.json`. Import and use this data directly — do not hardcode numbers in components.

## Important Notes

- Use Next.js `<Image>` component for all images (optimized loading)
- All pages must be responsive (mobile-first)
- Add smooth scroll behavior for anchor links
- Include alt text for all images describing the scene (for accessibility)
- Charts should have clear labels, no need for legends if labels are sufficient
- The overall site should feel like a polished research showcase, not a generic template
