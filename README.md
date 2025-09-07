# 🌟 Terminal Inspired Portfolio with Matrix Effects

A stunning, dark-themed portfolio website with cutting-edge animations and 3D effects, designed for developers who love Linux, cloud computing, networking, and cybersecurity.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue) ![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black)

![image](https://raw.githubusercontent.com/kunwarxshashank/Portfolio/refs/heads/main/public/screenshots/1.png)

## ✨ Features

### 🎨 Visual Effects
- **Matrix Rain Animation**: Falling character effect using HTML5 Canvas
- **3D Starfield**: Interactive Three.js particle system in hero section
- **Glassmorphism**: Subtle glass effects with backdrop blur
- **Shimmer Hover Effects**: Dynamic shimmer animations on interactive elements
- **Terminal Loader**: Custom loading screen with progress bar and terminal commands
- **Scan Line Animation**: Cyberpunk-style scanning effects

### 🎯 Design Elements
- **Dark Cyberpunk Theme**: Deep space black with neon green and hot pink accents
- **Terminal Typography**: Monospace fonts with glowing text effects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Custom Scrollbar**: Styled scrollbar matching the cyberpunk aesthetic
- **Smooth Animations**: Staggered loading and hover animations throughout

### 📱 Sections
- **Hero**: 3D background with animated introduction
- **About**: Professional bio with animated stats and developer metrics
- **Expertise**: Skill categories with animated progress bars and binary indicators
- **Projects**: Featured and regular project showcases with live demos
- **Languages & Frameworks**: Comprehensive tech stack with proficiency levels
- **Contact**: Interactive contact form with multiple contact methods

## 🚀 Technologies Used

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 with custom animations
- **3D Graphics**: Three.js for particle systems and 3D effects
- **Animations**: Framer Motion and custom CSS animations
- **Icons**: Lucide React icons

### Personal Information
Edit the following files to customize with your information:

- `components/hero.tsx` - Name, title, and introduction
- `components/about.tsx` - Bio, stats, and personal details
- `components/projects.tsx` - Your projects and portfolio items
- `components/expertise.tsx` - Skills and expertise areas
- `components/languages.tsx` - Programming languages and frameworks
- `components/contact.tsx` - Contact information and social links

### Styling & Colors
- `app/globals.css` - Global styles and color variables
- Modify CSS custom properties for theme colors:
  \`\`\`css
  :root {
    --primary: #00ff88;    /* Neon green */
    --accent: #ff0080;     /* Hot pink */
    --background: #0a0a0f; /* Deep space black */
  }
  \`\`\`

### Adding New Sections
1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/navigation.tsx`

## 🎯 Performance Features

- **Static Site Generation**: Optimized for fast loading
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **SEO Optimized**: Meta tags and structured data
- **Accessibility**: WCAG compliant with proper contrast ratios

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure Node.js version is 18+
- Clear node_modules and reinstall dependencies

**GitHub Pages Not Updating**
- Check GitHub Actions tab for build status
- Ensure repository is public or you have GitHub Pro

**3D Effects Not Working**
- Check browser WebGL support
- Ensure JavaScript is enabled


If you like this project, please give it a ⭐ on GitHub!

For questions or support, reach out through the contact form on the website or create an issue.

---

**Built with ❤️ by HIGHRISK** | **Powered by Next.js & Three.js
