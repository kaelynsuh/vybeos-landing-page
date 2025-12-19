# VybeOS Landing Page

Recreation of the VybeOS "How It Works" section, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** PP Neue Machina (headers), PP Neue Montreal (body)

## Features

- Responsive design with mobile-first approach
- Custom design tokens for colors and typography
- Semantic HTML structure
- Custom clip-path shapes for card corners
- Radial gradient backgrounds
- Inline emphasis syntax for title highlights using tokenized rendering

## Getting Started

Install and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Project Structure

```
app/
├── components/
│   ├── Arrow.tsx      # Arrow icon between cards
│   ├── Card.tsx       # Individual card component
│   └── HowItWorks.tsx # Main section component
├── fonts/             # Custom font files
├── globals.css        # Design tokens & global styles
├── layout.tsx         # Root layout with font loading
└── page.tsx           # Home page
```

## Design Tokens

Colors, fonts, and other design values are centralized in `globals.css` using CSS variables and Tailwind's `@theme inline` configuration.
