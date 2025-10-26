# Emotivis Landing Page

AI-powered Emotional Intelligence training platform landing page with a dark futuristic theme.

## 🚀 NEW HERE? START HERE!

👉 **[START-HERE.md](START-HERE.md)** - Complete getting started guide

### 📚 Documentation Quick Links
1. 📖 **[SETUP.md](SETUP.md)** - 5-minute setup guide
2. 🚀 **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to GitHub & Vercel
3. ✅ **[PRE-DEPLOYMENT-CHECKLIST.md](PRE-DEPLOYMENT-CHECKLIST.md)** - Pre-deploy verification
4. 📝 **[GITHUB-COMMANDS.txt](GITHUB-COMMANDS.txt)** - Copy/paste Git commands
5. ⚡ **[QUICK-REFERENCE.md](QUICK-REFERENCE.md)** - One-page cheat sheet

## 🚀 Features

- **Dark Futuristic Design**: Midnight theme with cyan-to-blue-to-purple gradients
- **Fully Responsive**: Mobile-optimized responsive design
- **Interactive Forms**: Multiple popup forms with confirmation messages
- **Pricing Tiers**: Spark (Free Trial), Empower ($45/month), Elevate ($68/month)
- **Career Application**: Integrated career application form with resume upload
- **Join the Movement CTAs**: Multiple conversion-optimized CTAs throughout

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Shadcn/ui** - UI Components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icons

## 📁 Project Structure

```
├── App.tsx                 # Main app component
├── main.tsx               # Entry point
├── index.html             # HTML template
├── components/            # All React components
│   ├── Hero.tsx
│   ├── WhatIsEmotivis.tsx
│   ├── Features.tsx
│   ├── Benefits.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── Integrations.tsx
│   ├── ContactUs.tsx
│   ├── Footer.tsx
│   └── ui/               # Shadcn UI components
├── lib/
│   └── assets.ts         # Placeholder images (SVG data URLs)
└── styles/
    └── globals.css       # Global styles & Tailwind config

```

## 🎨 Design Highlights

### Color Scheme
- **Background**: `#0a0e27` (Midnight dark)
- **Primary**: Cyan (`#06b6d4`) to Blue (`#3b82f6`) to Purple (`#8b5cf6`) gradients
- **Text**: Blue shades for content, cyan accents

### Typography
- Futuristic feel with large, bold headings
- Consistent gradient titles across all sections
- Custom typography system in `globals.css`

### Key Sections
1. **Hero**: Main CTA with trust badges
2. **What Is Emotivis**: Platform introduction
3. **Features**: 6 key features with visual cards
4. **Benefits**: ROI metrics and value propositions
5. **Pricing**: 3-tier pricing table
6. **Testimonials**: Customer success stories
7. **Integrations**: Partner logos
8. **Contact Us**: Contact form
9. **Footer**: Site navigation and career form

## 📝 Forms & CTAs

All "Join the Movement" buttons open popup forms with:
- **Gradient titles** matching section aesthetics
- **Validation** with required fields
- **Success confirmation** with "We will be in touch" message
- **Responsive design** for mobile

### Career Application Form
Located in Footer > Careers:
- Full Name, Email, Phone (required)
- Resume upload (optional)
- Email option: careers@emotivis.com

## 🖼️ Images

### Integration Logos
Using **Clearbit Logo API** for automatic company logos:
- Salesforce, HubSpot, Zendesk, Zoho, Freshdesk
- Dialpad, Five9, Genesys, Talkdesk, NICE
- Nextiva, RingCentral, vtiger, Agile CRM, Bitrix24

### Feature Icons
Using **Lucide React** icons with custom gradients:
- High-quality SVG icons
- Animated with futuristic effects
- No external dependencies needed

### Emotivis Logo
**⚠️ IMPORTANT SETUP STEP:**

After cloning this repository, you MUST add your Emotivis logo:

1. **Create a `/public` folder** in the project root
2. **Add your logo file**: Save your Emotivis logo as `/public/emotivis-logo.png`
   - Recommended: PNG with transparent background
   - Alternative: Can use `.svg`, `.jpg`, or `.webp` (update path in `/lib/assets.ts`)
3. The logo is referenced as `/emotivis-logo.png` in the code

**Without this step, the logo will show a broken image icon.**

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd emotivis-landing

# Install dependencies
npm install

# IMPORTANT: Add your logo (see Images section above)
# Create /public folder and add emotivis-logo.png
```

### Development
```bash
npm run dev
# Open http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output in /dist folder
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Vercel Dashboard
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects settings from `vercel.json`
   - Click "Deploy"

3. **⚠️ Before deploying, ensure:**
   - `/public/emotivis-logo.png` exists in your repository
   - All files are committed to Git

#### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Other Platforms

#### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

#### GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Configuration Files Included
- ✅ `vercel.json` - Vercel deployment settings
- ✅ `package.json` - Build scripts and dependencies
- ✅ `vite.config.ts` - Vite bundler configuration
- ✅ `tsconfig.json` - TypeScript configuration

## 🔧 Customization

### Update Content
- Edit component files in `/components/`
- Update metrics and copy as needed

### Change Colors
- Edit gradient classes in components
- Update color tokens in `/styles/globals.css`

### Add Real Images
1. Replace placeholder SVGs in `/lib/assets.ts`
2. Use real image files or external URLs

## 📱 Responsive Design

- **Desktop**: Full-width sections with multi-column layouts
- **Tablet**: Adjusted grid layouts
- **Mobile**: Stacked single-column layouts

All forms and dialogs are mobile-optimized with scrollable content.

## ⚡ Performance

- **Vite** for fast builds and HMR
- **Code splitting** for optimal loading
- **SVG placeholders** for lightweight assets
- **Tailwind CSS** for minimal CSS bundle

## 📄 License

Private project for Emotivis.

---

**Built with** ⚡ **Figma Make** - Deployed with 🚀 **Vercel**
