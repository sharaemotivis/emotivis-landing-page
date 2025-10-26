# ⚡ Quick Reference Card

**One-page reference for common tasks and commands**

---

## 🎯 FIRST TIME SETUP

```bash
# 1. Install dependencies
npm install

# 2. Test locally
npm run dev
# Open: http://localhost:5173

# 3. Verify logo appears in navigation
```

---

## 🚀 DEPLOYMENT COMMANDS

```bash
# Initialize Git (first time only)
git init
git add .
git commit -m "Initial commit: Emotivis landing page"
git remote add origin https://github.com/YOUR-USERNAME/emotivis-landing.git
git branch -M main
git push -u origin main

# Then deploy on Vercel:
# Go to vercel.com → Import Project → Deploy
```

---

## 🔄 UPDATING & REDEPLOYING

```bash
# Make your changes to files

# Test locally
npm run dev

# Commit and push (auto-deploys to Vercel)
git add .
git commit -m "Description of changes"
git push
```

---

## 🛠️ NPM COMMANDS

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production (creates /dist)
npm run preview      # Preview production build
```

---

## 📁 KEY FILES TO KNOW

```
/lib/assets.ts                # Logo & image references (hosted URL)
/components/                  # All React components
  ├── Hero.tsx               # Hero section
  ├── Features.tsx           # Features (6 cards with icons)
  ├── Pricing.tsx            # Pricing tiers
  └── Footer.tsx             # Footer with career form
/styles/globals.css           # Global styles & colors
package.json                  # Dependencies
vercel.json                   # Deployment config
```

---

## 🎨 CUSTOMIZATION QUICK EDITS

### Change Pricing
Edit: `/components/Pricing.tsx`
```tsx
// Line ~12-80: Update price amounts
price: "$45",  // Change to your price
```

### Update Hero Text
Edit: `/components/Hero.tsx`
```tsx
// Line ~50: Main headline
<h1>Your New Headline</h1>
```

### Modify Features
Edit: `/components/Features.tsx`
```tsx
// Line ~40-100: Update feature cards
title: "Your Feature",
description: "Your description",
```

### Change Colors
Edit gradient classes throughout components:
```tsx
from-cyan-400    → from-pink-400
via-blue-400     → via-purple-400
to-purple-400    → to-red-400
```

---

## 🐛 TROUBLESHOOTING

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Git Authentication Error
```bash
# Use GitHub personal access token
# Generate at: github.com/settings/tokens
# Use token as password when prompted
```

---

## 📋 DEPLOYMENT CHECKLIST

Before deploying:
- [ ] `npm run build` succeeds
- [ ] Logo appears in navigation
- [ ] No console errors
- [ ] Tested on mobile
- [ ] All forms work

---

## 🔗 USEFUL URLS

- **Vercel Dashboard:** vercel.com/dashboard
- **GitHub Repo:** github.com/YOUR-USERNAME/emotivis-landing
- **Local Dev:** localhost:5173
- **Deployed Site:** your-project.vercel.app

---

## 📚 DOCUMENTATION

| Document | Purpose |
|----------|---------|
| START-HERE.md | Complete getting started guide |
| SETUP.md | Local development setup |
| DEPLOYMENT.md | Full deployment walkthrough |
| PRE-DEPLOYMENT-CHECKLIST.md | Pre-deploy verification |
| GITHUB-COMMANDS.txt | Git command reference |
| ADD-LOGO.txt | Logo setup instructions |
| QUICK-REFERENCE.md | This document |

---

## 💡 COMMON TASKS

### Add New Section
1. Create `/components/MySection.tsx`
2. Import in `/App.tsx`: `import { MySection } from './components/MySection'`
3. Add to App: `<MySection />`

### Update Form Email
Edit: `/components/Footer.tsx`
```tsx
// Line ~XX: Change email address
careers@emotivis.com → newemail@emotivis.com
```

### Change Integration Logos
Edit: `/lib/assets.ts`
```tsx
// Line ~27-55: Clearbit API URLs
export const salesforceLogo = "https://logo.clearbit.com/salesforce.com";
```

### Add Custom Domain (Vercel)
1. Go to Vercel Dashboard
2. Settings → Domains
3. Add domain → Follow DNS instructions

---

## 🆘 NEED HELP?

**Quick Fixes:**
1. Clear cache: `rm -rf node_modules && npm install`
2. Check logs: Browser console (F12) + Terminal output
3. Verify Node version: `node -v` (needs 18+)

**Resources:**
- Vercel Docs: vercel.com/docs
- Vite Docs: vitejs.dev
- GitHub Guides: guides.github.com

**Stuck?** Check the comprehensive guides in the docs folder!

---

## ✅ SUCCESS INDICATORS

✅ Logo visible in navigation
✅ All 9 sections load properly
✅ Forms open and submit
✅ No console errors (F12)
✅ Mobile responsive works
✅ Build completes successfully
✅ Deployed site is live

---

**Print this page and keep it handy!** 📄
