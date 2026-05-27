# 📚 Component & API Documentation

## Components Overview

### Component Directory: `src/components/`

All components are client-side ('use client') and use TypeScript for type safety.

---

## 🔧 Components Reference

### 1. **Navbar** (`Navbar.tsx`)

Fixed navigation bar with responsive mobile menu.

**Features:**
- Scroll detection (changes style on scroll)
- Mobile hamburger menu
- Smooth navigation links
- Active section highlighting
- CTA button

**Usage:**
```typescript
import { Navbar } from '@/components';

<Navbar />
```

**Props:** None (uses external data)

---

### 2. **Hero** (`Hero.tsx`)

Eye-catching hero section with animations.

**Features:**
- Typewriter animation
- Animated background elements
- Greeting badge
- CTA buttons (Download Resume, Contact)
- Scroll indicator animation

**Usage:**
```typescript
<Hero />
```

**Props:** None

**Sub-components:**
- `Typewriter` - Custom typing animation

---

### 3. **About** (`About.tsx`)

Personal introduction section.

**Features:**
- Personal introduction text
- Key strengths list
- Contact information cards
- Glassmorphism design

**Usage:**
```typescript
<About />
```

**Props:** None

---

### 4. **Skills** (`Skills.tsx`)

Skills showcase with icons and categories.

**Features:**
- Categorized skills (Language, Frontend, Tools, etc.)
- Lucide React icons
- Hover animations
- Skills overview section
- Grouped by category

**Usage:**
```typescript
<Skills />
```

**Props:** None

**Icon Mapping:**
```typescript
const iconMap: { [key: string]: React.ComponentType<any> } = {
  code: Code,
  database: Database,
  sparkles: Sparkles,
  layout: Layout,
  palette: Palette,
  code2: Code2,
  gitBranch: GitBranch,
};
```

---

### 5. **Education** (`Education.tsx`)

Education timeline section.

**Features:**
- Timeline view
- Institution and degree details
- Percentage and year info
- Academic achievement summary

**Usage:**
```typescript
<Education />
```

**Props:** None

**Data Structure:**
```typescript
interface EducationEntry {
  degree: string;
  institution: string;
  university?: string;
  percentage: string;
  year: string;
}
```

---

### 6. **Projects** (`Projects.tsx`)

Project portfolio with filtering.

**Features:**
- Project cards with images
- Technology tags
- GitHub and demo links
- Category filtering (All, AI, Web, Data)
- Smooth animations on filter change

**Usage:**
```typescript
<Projects />
```

**Props:** None

**Data Structure:**
```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string; // emoji
}
```

---

### 7. **Certifications** (`Certifications.tsx`)

Professional certifications display.

**Features:**
- Certification cards
- Issuer information
- Statistics display
- Award icon

**Usage:**
```typescript
<Certifications />
```

**Props:** None

**Data Structure:**
```typescript
interface Certification {
  title: string;
  issuer: string;
  date: string;
}
```

---

### 8. **Contact** (`Contact.tsx`)

Contact form and information section.

**Features:**
- Contact information cards
- Contact form with validation
- Social media links
- Email and phone links
- Location information

**Usage:**
```typescript
<Contact />
```

**Props:** None

**Form State:**
```typescript
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

---

### 9. **Footer** (`Footer.tsx`)

Footer section with links and information.

**Features:**
- Brand information
- Quick links
- Social media icons
- Copyright notice
- Creator credit

**Usage:**
```typescript
<Footer />
```

**Props:** None

---

### 10. **ScrollToTop** (`ScrollToTop.tsx`)

Scroll-to-top button component.

**Features:**
- Appears after scrolling 300px
- Smooth scroll animation
- Framer Motion animations
- Auto-hide when at top

**Usage:**
```typescript
<ScrollToTop />
```

**Props:** None

---

### 11. **ParticleBackground** (`ParticleBackground.tsx`)

Animated particle background effect.

**Features:**
- Canvas-based particle animation
- Responsive to window size
- Smooth particle movement
- Semi-transparent particles
- Auto-resize on window change

**Usage:**
```typescript
<ParticleBackground />
```

**Props:** None

**Notes:** Uses HTML5 Canvas API for performance

---

## 📊 Data Structure

### `src/data/portfolio.ts`

Contains all portfolio content as constants.

**Exports:**

#### `portfolioData`
```typescript
export const portfolioData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  intro: string;
  about: string;
}
```

#### `skills`
```typescript
export const skills = Array<{
  name: string;
  icon: string; // Lucide icon name
  category: string;
}>
```

#### `education`
```typescript
export const education = Array<{
  degree: string;
  institution: string;
  university: string;
  percentage: string;
  year: string;
}>
```

#### `projects`
```typescript
export const projects = Array<{
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}>
```

#### `certifications`
```typescript
export const certifications = Array<{
  title: string;
  issuer: string;
  date: string;
}>
```

---

## 🎨 Styling & Layout

### Global Styles: `src/styles/globals.css`

**Features:**
- Tailwind CSS directives
- Custom animations (fadeIn, slideUp, float, pulse-slow)
- Glassmorphism effect (.glass class)
- Gradient text effect (.gradient-text class)
- Hover glow effect (.hover-glow class)
- Scrollbar styling
- Custom scrollbar colors

**Key Classes:**
```css
.glass         /* Glassmorphism effect */
.gradient-text /* Gradient text color */
.hover-glow    /* Hover with glow effect */
```

**Custom Animations:**
```css
@keyframes fadeIn  /* Fade in animation */
@keyframes slideUp /* Slide up animation */
@keyframes float   /* Float animation */
```

---

## 🎬 Animation System

### Framer Motion Integration

All animated components use Framer Motion for smooth transitions.

**Common Patterns:**

```typescript
// Container animation with stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Item animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

// Usage in motion component
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
  {/* Content */}
</motion.div>
```

---

## 🔌 Hooks & Utilities

### Custom Hooks

#### `useScroll` (in Navbar)
```typescript
const handleScroll = () => {
  setScrolled(window.scrollY > 50);
};
```

#### `useTypewriter` (in Hero)
```typescript
const [displayText, setDisplayText] = useState('');
// Auto-typewriter effect
```

---

## 🌐 External Dependencies

### Production Dependencies
- **next**: 14.0.0+ - React framework
- **react**: 18.2.0+ - UI library
- **react-dom**: 18.2.0+ - DOM rendering
- **framer-motion**: 10.16.0+ - Animations
- **lucide-react**: 0.263.0+ - Icons
- **react-scroll**: 1.8.10+ - Scroll utilities

### Development Dependencies
- **typescript**: 5.2.0+ - Type safety
- **tailwindcss**: 3.3.0+ - CSS framework
- **postcss**: 8.4.0+ - CSS processing
- **autoprefixer**: 10.4.0+ - CSS prefixes
- **eslint**: 8.0.0+ - Code linting
- **eslint-config-next**: 14.0.0+ - Next.js ESLint config

---

## 📦 Building & Exporting

### Component Barrel Export: `src/components/index.ts`

```typescript
export { default as Navbar } from './Navbar';
export { default as Hero } from './Hero';
// ... all components
```

**Usage:**
```typescript
import { Navbar, Hero, About } from '@/components';
```

---

## 🔐 Type Safety

All components are TypeScript with proper typing:

```typescript
// Props typing (if needed)
interface ComponentProps {
  prop: string;
  optional?: boolean;
}

// React.FC for proper typing
const Component: React.FC<ComponentProps> = ({ prop }) => {
  return <div>{prop}</div>;
};
```

---

## 🚀 Performance Optimization

### Code Splitting
- Components auto-split via Next.js
- Lazy loading on scroll
- Image optimization ready

### Rendering
- Client-side rendering (use 'use client')
- ViewportInView for lazy animations
- Optimized re-renders

### Bundle
- Tree-shaking enabled
- Minification in production
- Gzip compression

---

## 📱 Responsive Design

### Tailwind Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

**Usage:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Responsive grid -->
</div>
```

---

## 🎨 Color System

### Configured Colors (tailwind.config.ts)
```typescript
colors: {
  dark: '#0f1419',
  'dark-secondary': '#1a1f2e',
  'dark-tertiary': '#252d3d',
  accent: '#00d4ff',
  'accent-secondary': '#7c3aed',
}
```

---

## 🔗 URL Navigation

### Internal Links
```typescript
<Link href="#section-id">Link Text</Link>
```

### Smooth Scroll
```html
<html style="scroll-behavior: smooth;">
```

---

## ♿ Accessibility

- ARIA labels on icons
- Semantic HTML elements
- Keyboard navigation support
- Focus indicators
- High contrast colors

---

## 📖 Further Reading

- [Next.js App Router](https://nextjs.org/docs/app)
- [React Components](https://react.dev/learn/your-first-component)
- [TypeScript React](https://www.typescriptlang.org/docs/handbook/2/jsx.html)
- [Framer Motion Guide](https://www.framer.com/motion)
- [Tailwind Components](https://tailwindcss.com/docs/installation)

---

**All components are production-ready and well-documented!** 🎉
