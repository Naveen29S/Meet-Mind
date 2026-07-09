# MeetMind - AI Powered Meeting Intelligence

This document outlines the implementation plan for the "MeetMind" modern AI SaaS website, using React.js, Tailwind CSS, Framer Motion, and Lucide React.

## Proposed Changes

We will start by initializing a new React project using Vite and then implement the requested features step-by-step.

### 1. Project Initialization & Setup
- Initialize a React app using Vite (`npx create-vite . --template react`).
- Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `lucide-react`, `react-router-dom`.
- Configure `tailwind.config.js` with custom colors (Purple, Blue, Cyan gradients) and extend animations.
- Set up global CSS for dark mode and glassmorphism utilities.

### 2. Core Architecture & Routing
- Set up React Router for navigation between the Landing Page and the Dashboard/Upload Page.
- Implement a global context or hook for Dark/Light mode toggling.

### 3. Shared Components
- **Navbar**: Sticky top navigation with glassmorphism, responsive mobile menu, and Dark/Light toggle.
- **Footer**: Standard SaaS footer with links and branding.
- **Button**: Reusable button component supporting primary, secondary, and ghost variants.

### 4. Landing Page Sections
- **Hero Section**: Large AI illustration placeholder, typing animation for tagline, animated floating gradient blobs, primary/secondary buttons.
- **Features Section**: Grid of glassmorphism cards with Lucide icons (Instant Summary, Action Items, etc.).
- **How It Works**: Vertical animated timeline detailing the 6 steps from upload to dashboard.
- **Dashboard Preview**: A mockup section showcasing the UI of the MeetMind dashboard with charts and cards.
- **Tech Stack**: Grid of modern tech cards (React, Tailwind, Supabase, Gemini, etc.).
- **Benefits**: Animated statistic counters (80% Time Saved, etc.) and benefit cards for different user types.
- **Pricing**: Three-tier pricing cards (Free, Starter, Premium) with hover glow effects.
- **Contact Section**: Two-column layout with contact information and a form.

### 5. Application Pages
- **Upload / Dashboard Page**: 
  - Drag and drop audio file uploader.
  - "Fake" AI processing sequence with smooth loading animations.
  - Results view displaying: Meeting Summary, Key Decisions, Action Items table (Task, Assigned To, Deadline, Status), and Decision Timeline.

## User Review Required

> [!IMPORTANT]
> The application will be a single-page React app (SPA) that fakes the backend processing (upload and AI generation) for demo purposes, as requested for a hackathon presentation.
> We will use `framer-motion` for all scrolling and hover animations.

## Open Questions

> [!TIP]
> Are there any specific gradient color hex codes you prefer for the Purple/Blue/Cyan theme, or should I use a curated modern dark-mode palette?

## Verification Plan

### Automated Tests
- N/A for this hackathon-style UI build. We will rely on React compilation and linting.

### Manual Verification
- Run the local dev server (`npm run dev`).
- Test responsiveness across mobile, tablet, and desktop viewports.
- Verify Framer Motion scroll animations trigger correctly.
- Test the Dark/Light mode toggle.
- Go through the "Upload Audio" flow to ensure the fake processing animation and result rendering work smoothly.
