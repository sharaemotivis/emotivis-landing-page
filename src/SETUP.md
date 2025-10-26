# ⚡ Quick Setup Guide

Get your Emotivis landing page running in 5 minutes!

---

## 🎯 What You'll Need

1. **Node.js 18+** - [Download here](https://nodejs.org/)
2. **GitHub account** - [Sign up here](https://github.com/join)
3. **Vercel account** - [Sign up here](https://vercel.com/signup)

---

## 📋 Quick Start (3 Steps)

### Step 1: Download the Project
If you downloaded from Figma Make, you already have the files!

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Test Locally
```bash
npm run dev
# Open http://localhost:5173
```

**Verify:**
- ✅ Logo appears in navigation
- ✅ All sections load
- ✅ Forms work

**Ready to deploy?** See [DEPLOYMENT.md](/DEPLOYMENT.md) for complete GitHub + Vercel deployment instructions.

---

## 🚨 COMMON FIRST-TIME ISSUES

### "npm install fails"
**Problem:** Dependency installation errors

**Fix:**
```bash
# Try clearing cache:
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Or use different registry:
npm install --registry=https://registry.npmjs.org/
```

### "npm run dev doesn't work"
**Problem:** Vite server won't start

**Fix:**
```bash
# Check Node version (must be 18+):
node -v

# If below 18, update Node.js
# Download from: https://nodejs.org/
```

### "Port already in use"
**Problem:** Port 5173 is occupied

**Fix:**
```bash
# Kill process on port 5173:
# On Mac/Linux:
lsof -ti:5173 | xargs kill -9

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or use different port:
npm run dev -- --port 3000
```

---

## 📁 Project Structure Overview

```
emotivis-landing/
├── public/                    # Static assets
│   └── emotivis-logo.png     # ⚠️ YOU MUST ADD THIS
├── components/               # React components
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features section
│   ├── Pricing.tsx          # Pricing section
│   └── ...
├── lib/
│   └── assets.ts           # Image/logo references
├── styles/
│   └── globals.css         # Global styles
├── App.tsx                 # Main app
├── main.tsx               # Entry point
├── package.json           # Dependencies
└── vercel.json           # Deployment config
```

---

## 🎨 Customization Quick Tips

### Change Colors
Edit gradient classes in component files:
```tsx
// Find and replace color classes:
from-cyan-400 → from-pink-400
via-blue-400 → via-purple-400
to-purple-400 → to-red-400
```

### Update Content
Edit text directly in component files:
- **Hero text:** `/components/Hero.tsx`
- **Features:** `/components/Features.tsx`
- **Pricing:** `/components/Pricing.tsx`

### Add New Section
1. Create `/components/MySection.tsx`
2. Import in `/App.tsx`
3. Add `<MySection />` in App.tsx

---

## ✅ Verification Checklist

Before deploying, verify:

- [ ] `npm install` completes successfully
- [ ] `npm run dev` starts server
- [ ] Logo shows in navigation (from ImageKit URL)
- [ ] All sections render correctly
- [ ] Forms open when clicking "Join the Movement"
- [ ] Integration logos display
- [ ] Mobile responsive (resize browser)
- [ ] `npm run build` completes without errors

---

## 🚀 Ready to Deploy?

Once everything works locally, follow:
👉 **[DEPLOYMENT.md](/DEPLOYMENT.md)** for step-by-step GitHub + Vercel deployment

---

## 🆘 Still Having Issues?

### Check These First:
1. **Node version:** `node -v` (must be 18+)
2. **npm version:** `npm -v` (should be 9+)
3. **Logo loads:** Check browser console (F12) for image errors
4. **No errors:** Check browser console (F12) for any errors

### Resources:
- [Vite Troubleshooting](https://vitejs.dev/guide/troubleshooting.html)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

---

**🎉 You're all set!** Run `npm run dev` and start building!
