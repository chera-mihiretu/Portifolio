# Chera Mihiretu - Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat-square&logo=tailwind-css)
![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-green?style=flat-square)

> Portfolio website of **Chera Mihiretu** - ACPC 2025 Finalist, Top Ethiopia GitHub Contributor, Software Engineering Student at Adama Science and Technology University (ASTU), and Africa To Silicon Valley (A2SV) Graduate.

## 🌟 About Me

- 🎓 **Student** at Adama Science and Technology University
- 🚀 **Graduate** of Africa To Silicon Valley (A2SV) Program
- 🏆 **ACPC 2025 Finalist** - Arab and African Collegiate Programming Contest
- ⭐ **Top GitHub Contributor** in Ethiopia
- ☁️ **AWS Certified Solutions Architect** - Associate
- 💻 Specializing in Full-Stack Development, Mobile Apps, and Competitive Programming

## 🚀 Features

### Technical Stack
- **Framework**: Next.js 15.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

### SEO Optimizations ✨
This portfolio is **fully optimized for Google search** with:

#### 📊 Metadata & Tags
- Comprehensive meta tags with 30+ targeted keywords
- Open Graph Protocol for social media sharing
- Twitter Card optimization
- Canonical URLs for all pages

#### 🔍 Structured Data (JSON-LD)
- Person Schema with achievements and credentials
- Website Schema
- ProfilePage Schema
- BreadcrumbList Schema for navigation

#### 🗺️ Technical SEO
- Dynamic XML sitemap (`/sitemap.xml`)
- Robots.txt for search engine crawlers
- PWA manifest for app-like experience
- Image optimization (AVIF, WebP)
- Performance optimizations
- Security headers

#### 🎯 Targeted Keywords
- Chera Mihiretu
- Ethiopian Software Engineer
- ACPC 2025 Finalist
- Top GitHub Ethiopia
- Adama Science and Technology University
- Africa To Silicon Valley
- AWS Certified Ethiopia
- And many more...

#### 📱 Social Media
- Custom Open Graph images
- Twitter Card images
- Optimized sharing previews

**See [SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md) for complete details.**

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chera-mihiretu/Portifolio.git
cd Portifolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables (optional):
```bash
# Copy the example file
cp env.example.txt .env.local

# Edit .env.local with your values
# - Google Analytics ID
# - Site URL
# - Contact Email
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── public/
│   ├── assets/          # Images, CV, icons
│   ├── robots.txt       # Search engine instructions
│   └── manifest.json    # PWA manifest
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   ├── page.tsx             # Home page
│   │   ├── sitemap.ts           # Dynamic sitemap
│   │   ├── opengraph-image.tsx  # OG image generator
│   │   └── twitter-image.tsx    # Twitter card image
│   ├── components/
│   │   ├── Hero.tsx             # Hero section with badges
│   │   ├── InteractivePlayground.tsx  # Main intro section
│   │   ├── Projects.tsx         # Project showcase
│   │   ├── Skills.tsx           # Skills section
│   │   ├── Education.tsx        # Education timeline
│   │   ├── Achievements.tsx     # Awards & certifications
│   │   ├── Contact.tsx          # Contact form
│   │   ├── StructuredData.tsx   # JSON-LD schemas
│   │   └── Analytics.tsx        # Google Analytics
│   └── context/
│       └── ThemeContext.tsx     # Dark/Light theme
├── next.config.ts       # Next.js configuration (SEO optimized)
├── tailwind.config.ts   # Tailwind CSS config
└── SEO_IMPLEMENTATION.md  # Comprehensive SEO guide
```

## 🎨 Sections

1. **Hero** - Introduction with key achievements and badges
2. **Projects** - Showcase of mobile apps and web applications
3. **Skills** - Technical skills and technologies
4. **Education** - ASTU, A2SV, and certifications
5. **Achievements** - ACPC, AWS certifications, hackathons
6. **Contact** - Get in touch section

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📈 SEO Setup Checklist

After deployment:

- [ ] Update domain in `src/app/layout.tsx` metadata
- [ ] Add Google Analytics ID to environment variables
- [ ] Verify site with Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph tags with Facebook Debugger
- [ ] Test Twitter Cards with Twitter Card Validator
- [ ] Validate structured data with Google Rich Results Test
- [ ] Check mobile responsiveness
- [ ] Test page speed with PageSpeed Insights

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/chera-mihiretu/Portifolio)

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## 📊 Performance

- ⚡ Lighthouse Score: 95+ (Performance)
- 🎯 SEO Score: 100
- ♿ Accessibility: 95+
- ✅ Best Practices: 100

## 🤝 Connect

- **GitHub**: [@chera-mihiretu](https://github.com/chera-mihiretu)
- **LeetCode**: [cheramihiretu](https://leetcode.com/cheramihiretu)
- **Codeforces**: [chera_mihiretu](https://codeforces.com/profile/chera_mihiretu)
- **LinkedIn**: [Add your LinkedIn]
- **Email**: [Add your email]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Adama Science and Technology University** - My academic home
- **Africa To Silicon Valley (A2SV)** - For the incredible training and opportunities
- **Google** - For backing A2SV
- **Ethiopian Developer Community** - For continuous support

---

**Built with ❤️ by Chera Mihiretu**

*ACPC 2025 Finalist | Top GitHub Ethiopia | A2SV Graduate | AWS Certified*
