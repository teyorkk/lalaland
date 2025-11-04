# La La Land — A Cinematic Journey

A stunning, cinematic informative website about the movie La La Land, built with Next.js, Tailwind CSS, and Framer Motion.

## Table of Contents

- [About / Overview](#about--overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation / Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Deployment / Live Demo](#deployment--live-demo)
- [PWA Status & Setup](#pwa-status--setup)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments / Credits](#acknowledgments--credits)
- [Contact / Author Info](#contact--author-info)

## About / Overview

A stunning tribute to Damien Chazelle's masterpiece musical romance. This project showcases elegant design, emotional storytelling, and creative web development inspired by La La Land's dreamy visuals and jazz ambiance. Explore the dreamy world of Mia and Sebastian through jazz, love, and ambition in modern Los Angeles.

## Features

- **Cinematic Hero Section**: Fullscreen experience with animated stars and gradient backgrounds
- **Interactive Components**: Hover effects, scroll animations, and micro-interactions throughout
- **Music & Soundtrack**: Beautiful track listings with descriptions and mood indicators
- **Gallery Section**: Iconic scenes from La La Land with optimized image display
- **Character Profiles**: Detailed character cards with personality traits and photos
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **PWA Ready**: Progressive Web App capabilities with install prompts
- **SEO Optimized**: Comprehensive metadata for search engines
- **Easter Eggs**: Hidden quotes and interactive surprises
- **Component Architecture**: Refactored into tiny, reusable components

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Fonts**: Playfair Display (titles) + Inter (body)
- **PWA**: Service Worker + Web App Manifest

## Installation / Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production**:
   ```bash
   pnpm build
   ```

5. **Start production server**:
   ```bash
   pnpm start
   ```

## Project Structure

```
app/
├── Sections/
│   ├── Hero.tsx          # Cinematic hero with animations
│   ├── About.tsx         # Film overview and timeline
│   ├── Characters.tsx    # Character cards with images
│   ├── Music.tsx         # Soundtrack listings
│   ├── Gallery.tsx       # Movie stills gallery
│   ├── Themes.tsx        # Symbolism and themes exploration
│   ├── Trivia.tsx        # Interactive trivia cards
│   └── WhyBuilt.tsx      # Developer's personal reflection
├── components/
│   ├── ui/
│   │   ├── MotionCard.tsx      # Animated card wrapper
│   │   ├── AnimatedButton.tsx  # Animated button component
│   │   ├── FloatingElement.tsx # Floating animation wrapper
│   │   ├── SectionTitle.tsx    # Section title with animations
│   │   ├── CharacterCard.tsx   # Character card component
│   │   ├── MusicTrackCard.tsx  # Music track card component
│   │   ├── GalleryCard.tsx     # Gallery card component
│   │   ├── button.tsx          # Base button component
│   │   ├── card.tsx            # Base card component
│   │   └── badge.tsx           # Badge component
│   └── PWAInstallPrompt.tsx    # PWA install prompt component
├── lib/
│   ├── animation-utils.ts # Deterministic animation utilities
│   └── utils.ts          # Utility functions
├── layout.tsx            # Root layout with fonts and metadata
├── page.tsx              # Main page component
└── globals.css           # Global styles and animations
public/
├── manifest.json         # PWA manifest configuration
├── sw.js                 # Service worker for offline support
├── icon-192x192.svg      # App icon (192px)
├── icon-512x512.svg      # App icon (512px)
└── images/               # Character and gallery images
```

## Deployment / Live Demo

### Development
- Local development: `http://localhost:3000`

### Production Deployment
1. **Vercel** (Recommended):
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify**:
   ```bash
   pnpm build
   # Deploy the `out` folder to Netlify
   ```

3. **Docker**:
   ```bash
   pnpm build
   docker build -t la-la-land .
   docker run -p 3000:3000 la-la-land
   ```

## PWA Status & Setup

### Current Status: ✅ **Fully Configured**

- ✅ Web App Manifest configured
- ✅ Service Worker for offline support
- ✅ Custom app icons (SVG format)
- ✅ Install prompts for Android/iOS
- ✅ Responsive design
- ✅ Mobile viewport fixes

### Installation Instructions:

1. **Android**:
   - Open in Chrome/Edge
   - Click install button in Hero section
   - Or look for install icon in address bar

2. **iOS**:
   - Open in Safari
   - Tap Share button → "Add to Home Screen"

3. **Desktop**:
   - Open in Chrome/Edge
   - Click install button or use address bar icon

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**:
   ```bash
   pnpm build
   pnpm dev
   ```
5. **Commit your changes**:
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Guidelines:
- Follow the existing code style
- Use TypeScript for all new components
- Keep components small and reusable
- Add proper animations with Framer Motion
- Test on mobile and desktop

## License

This project is a tribute to La La Land and is built for educational and portfolio purposes. All film-related content belongs to their respective owners.

## Acknowledgments / Credits

### Film Credits
- **Director**: Damien Chazelle
- **Music**: Justin Hurwitz
- **Stars**: Ryan Gosling, Emma Stone

### Technical Credits
- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Shadcn/UI** - Component library

### Inspiration
- La La Land (2016) - The musical romance that inspired this project
- Jazz music and Los Angeles culture

## Contact / Author Info

**Moises Theo**
- **GitHub**: [@moises-theo](https://github.com/moises-theo)
- **LinkedIn**: [moises-theo](https://www.linkedin.com/in/moises-atienza-a58a422aa)
- **Email**: moisestheotatienza@gmail.com
- **Portfolio**: [moises-theo.dev](https://moises-theo.dev)

---

*"Here's to the fools who dream."* — La La Land
