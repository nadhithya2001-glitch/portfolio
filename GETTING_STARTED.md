# Getting Started Guide

## Project Overview

This is a modern, fully responsive personal portfolio website built with cutting-edge web technologies. It showcases Adhithya N's journey as a Data Science and Generative AI enthusiast.

## 🚀 Quick Start

### 1. Installation

First, ensure you have Node.js (v18+) installed on your system.

```bash
# Install dependencies
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### 2. Running Locally

```bash
# Start development server
npm run dev

# The application will be available at http://localhost:3000
```

### 3. Building for Production

```bash
# Create optimized build
npm run build

# Start production server
npm run start
```

## 📝 Customizing Content

### Personal Information
Edit `src/data/portfolio.ts` to update all personal information:

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  phone: "+1 234 567 8900",
  location: "Your Location",
  // ... other fields
};
```

### Skills
Add or modify skills in the `skills` array:

```typescript
export const skills = [
  {
    name: "Skill Name",
    icon: "icon-name",
    category: "Category",
  },
  // ...
];
```

### Education
Update education details in the `education` array:

```typescript
export const education = [
  {
    degree: "Degree Name",
    institution: "Institution Name",
    university: "University Name",
    percentage: "GPA",
    year: "2024",
  },
  // ...
];
```

### Projects
Add your projects to showcase your work:

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    demo: "https://demo.com",
    image: "📊",
  },
  // ...
];
```

### Certifications
Update your certifications:

```typescript
export const certifications = [
  {
    title: "Certification Name",
    issuer: "Issuer Name",
    date: "2024",
  },
  // ...
];
```

## 🎨 Styling & Customization

### Colors
Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  dark: '#0f1419',
  'dark-secondary': '#1a1f2e',
  accent: '#00d4ff',
  'accent-secondary': '#7c3aed',
}
```

### Fonts
Update fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Global Styles
Modify `src/styles/globals.css` for global styling, animations, and effects.

## 🔧 Component Structure

### Navbar
- Fixed navigation with scroll detection
- Mobile-responsive menu
- Active section highlighting
- Smooth link transitions

### Hero Section
- Typing animation
- Animated background elements
- Call-to-action buttons
- Scroll indicator

### About Section
- Personal introduction
- Key strengths list
- Contact information cards

### Skills Section
- Categorized skills display
- Icons for each skill
- Hover animations
- Skills overview

### Education Section
- Timeline view of education
- Institution details
- Percentage and year information

### Projects Section
- Project cards with images
- Technology tags
- GitHub and demo links
- Category filtering

### Certifications Section
- Certification cards
- Issuer information
- Statistics display

### Contact Section
- Contact information cards
- Contact form
- Social media links
- Direct contact methods

### Footer
- Quick links
- Social media links
- Copyright information

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Configure environment variables if needed
5. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Upload the '.next' folder and public assets to Netlify
```

**GitHub Pages:**
```bash
npm run build
# Configure gh-pages in package.json
npm run deploy
```

## 📱 Responsive Design

The portfolio is optimized for all screen sizes:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1440px
- **Large**: 1441px+

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast colors
- Focus indicators

## 🔍 SEO Optimization

- Meta tags and descriptions
- Open Graph tags
- Twitter card support
- Structured data
- Mobile-friendly
- Fast page load

## 🎯 Performance Tips

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Automatic via Next.js
3. **Lazy Loading**: Components load on scroll
4. **Minification**: Automatic in production build
5. **Caching**: Browser caching configured

## 🐛 Troubleshooting

### Issue: Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use
```bash
# Run on different port
npm run dev -- -p 3001
```

### Issue: Styling not applying
```bash
# Rebuild Tailwind CSS
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide React Icons](https://lucide.dev)

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio as a template for your own!

## 📞 Support

For issues or questions:
1. Check existing documentation
2. Review the code comments
3. Open an issue in the repository
4. Contact via email

---

**Happy coding! 🚀**
