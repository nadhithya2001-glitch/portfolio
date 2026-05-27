# 🚀 QUICK START REFERENCE

## Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
http://localhost:3000

# 4. Build for production
npm run build

# 5. Start production server
npm run start
```

## Key Files to Edit

| File | Purpose |
|------|---------|
| `src/data/portfolio.ts` | **MAIN**: All your content |
| `tailwind.config.ts` | Colors and fonts |
| `src/styles/globals.css` | Global styles |
| `src/components/*.tsx` | Component customization |

## Content Structure

```typescript
// src/data/portfolio.ts
- portfolioData: Name, title, contact
- skills: Array of skills with icons
- education: Educational background
- projects: Portfolio projects
- certifications: Professional certs
```

## Available Components

```
✅ Navbar           - Navigation bar
✅ Hero             - Intro section
✅ About            - About you
✅ Skills           - Skills showcase
✅ Education        - Education timeline
✅ Projects         - Projects with filters
✅ Certifications   - Certificates
✅ Contact          - Contact form
✅ Footer           - Footer section
✅ ScrollToTop      - Back to top button
✅ ParticleBackground - Animated bg
```

## NPM Commands

```bash
npm run dev      # Development server
npm run build    # Build for production
npm run start    # Production server
npm run lint     # Check code quality
```

## Deployment

```bash
# Vercel
vercel

# Netlify (via GitHub)
# Connect repo → Deploy

# Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Customization Quick Wins

### Change Colors
```typescript
// tailwind.config.ts
colors: {
  accent: '#00d4ff',
  'accent-secondary': '#7c3aed',
}
```

### Update Name
```typescript
// src/data/portfolio.ts
name: "Your Name"
```

### Add Skill
```typescript
// src/data/portfolio.ts
skills: [
  { name: "Skill Name", icon: "icon-name", category: "Category" }
]
```

### Add Project
```typescript
// src/data/portfolio.ts
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Description",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    demo: "https://demo.com",
    image: "🎯",
  }
]
```

## Useful Lucide Icons

```
code, code2
database, sparkles
layout, palette
gitBranch
book, award
mail, phone, mapPin, github, linkedin
heart, download, arrow-up
```

## Folder Structure

```
src/
├── app/           → Next.js pages
├── components/    → React components
├── data/          → Portfolio content
├── styles/        → CSS & animations
└── assets/        → Images & media

public/           → Static files
```

## Common Issues & Fixes

**Port 3000 in use:**
```bash
npm run dev -- -p 3001
```

**Clear cache:**
```bash
rm -rf .next node_modules
npm install
```

**TypeScript errors:**
```bash
npm run lint
```

## Documentation

- `README.md` - Overview
- `SETUP_INSTRUCTIONS.md` - Setup guide
- `GETTING_STARTED.md` - Customization
- `PROJECT_SUMMARY.md` - Full summary

## Important URLs

- **Dev**: http://localhost:3000
- **Next.js Docs**: https://nextjs.org
- **Tailwind Docs**: https://tailwindcss.com
- **Framer Motion**: https://framer.com/motion
- **Lucide Icons**: https://lucide.dev

## Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values
```

## Testing Checklist

- [ ] npm install runs without errors
- [ ] npm run dev starts successfully
- [ ] Website loads at localhost:3000
- [ ] All navigation links work
- [ ] Mobile responsive works
- [ ] Contact form submits
- [ ] npm run build completes
- [ ] npm run start works

## Production Pre-Deployment

- [ ] Updated all content in portfolio.ts
- [ ] Added real social media links
- [ ] Tested all links
- [ ] Built successfully
- [ ] Tested production build
- [ ] Added favicon (optional)
- [ ] Set up domain
- [ ] Configured SSL/HTTPS
- [ ] Deploy!

## Support

Refer to full documentation files or check official docs:
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

**Pro Tip**: Start by editing `src/data/portfolio.ts` and the rest follows naturally!

**Happy coding! 🎉**
