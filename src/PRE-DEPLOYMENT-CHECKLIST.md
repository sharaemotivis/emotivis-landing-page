# ✅ Pre-Deployment Checklist

Complete this checklist before deploying your Emotivis landing page to ensure a smooth deployment.

---

## 🎯 CRITICAL REQUIREMENTS (Must Complete)

### 1. Local Development Works
- [ ] Ran `npm install` successfully (no errors)
- [ ] Ran `npm run dev` successfully
- [ ] Site loads at `http://localhost:5173`
- [ ] Logo displays correctly (not broken image)
- [ ] All sections render properly

### 2. Production Build Works
- [ ] Ran `npm run build` successfully
- [ ] Build completed without errors
- [ ] `/dist` folder created with files inside
- [ ] Ran `npm run preview` and site works

---

## 🧪 FUNCTIONAL TESTING

### Navigation & Sections
- [ ] Hero section displays with gradient title
- [ ] "What is Emotivis" section loads
- [ ] Features section shows 6 feature cards with icons
- [ ] Benefits section displays ROI metrics
- [ ] Pricing section shows 3 pricing tiers
- [ ] Testimonials section visible
- [ ] Integrations section shows company logos
- [ ] Contact Us form section loads
- [ ] Footer displays with career form

### Interactive Elements
- [ ] "Join the Movement" buttons work (opens popup)
- [ ] Popup forms display correctly
- [ ] Form fields are editable
- [ ] Form submit shows "Thank You" message
- [ ] Career application form in Footer works
- [ ] Resume upload field present
- [ ] All dropdowns/selects work

### Visual Elements
- [ ] Logo appears in navigation
- [ ] All gradient titles render (cyan-blue-purple)
- [ ] Feature icons show with animations
- [ ] Pricing cards display properly
- [ ] Integration logos load (Clearbit API)
- [ ] Trust badges show in Hero
- [ ] Background effects/animations work

### Responsive Design
- [ ] Desktop view (1920px) looks good
- [ ] Tablet view (768px) works
- [ ] Mobile view (375px) is usable
- [ ] Navigation adapts to screen size
- [ ] Forms are mobile-friendly
- [ ] No horizontal scrolling issues

---

## 🔍 CODE QUALITY CHECKS

### File Integrity
- [ ] All component files present in `/components`
- [ ] `/lib/assets.ts` updated with logo path
- [ ] `/styles/globals.css` exists
- [ ] `package.json` has all dependencies
- [ ] `vercel.json` configuration present
- [ ] `.gitignore` file exists

### No Errors
- [ ] No console errors in browser (F12 > Console)
- [ ] No TypeScript errors in terminal
- [ ] No missing dependencies warnings
- [ ] No broken imports

### Assets
- [ ] Logo file exists: `/public/emotivis-logo.png`
- [ ] Integration logos use Clearbit API (no local files needed)
- [ ] Feature icons use Lucide React (no imports needed)
- [ ] All SVG placeholders load correctly

---

## 📊 CONTENT VERIFICATION

### Text Content
- [ ] Company name "Emotivis" spelled correctly throughout
- [ ] Pricing tiers: Spark (Free), Empower ($45), Elevate ($68)
- [ ] ROI metrics accurate: 30% CSAT, 15% profit, 40% retention
- [ ] Contact email correct: careers@emotivis.com
- [ ] All section headings present
- [ ] No Lorem Ipsum placeholder text

### Links & CTAs
- [ ] "Join the Movement" CTAs functional
- [ ] All buttons clickable
- [ ] Forms submit (show success message)
- [ ] No broken links
- [ ] Smooth scroll to sections works (if implemented)

---

## 🐛 BROWSER TESTING

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium) - Latest version
- [ ] Firefox - Latest version
- [ ] Safari - Latest version (Mac/iOS)
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

**Check for:**
- Visual consistency
- Functional buttons/forms
- No layout breaks
- Animations work
- Gradients render correctly

---

## 📁 GITHUB PREPARATION

### Repository Setup
- [ ] Created repository on GitHub
- [ ] Repository name: `emotivis-landing` (or your choice)
- [ ] Set to Private or Public as needed
- [ ] Do NOT initialize with README (you already have one)

### Local Git Setup
- [ ] Ran `git init` in project folder
- [ ] Added remote: `git remote add origin <url>`
- [ ] Verified remote: `git remote -v`

### Files to Commit
Critical files that MUST be in Git:
- [ ] `/public/emotivis-logo.png` ⚠️ CRITICAL
- [ ] All `/components/*.tsx` files
- [ ] `/lib/assets.ts`
- [ ] `/styles/globals.css`
- [ ] `package.json`
- [ ] `vercel.json`
- [ ] `.gitignore`
- [ ] `vite.config.ts`
- [ ] `tsconfig.json`
- [ ] `index.html`
- [ ] `App.tsx`
- [ ] `main.tsx`

### Files to EXCLUDE (in .gitignore)
Should NOT be committed:
- [ ] `node_modules/` folder
- [ ] `dist/` folder
- [ ] `.env` files
- [ ] `.DS_Store` files

---

## 🚀 VERCEL PREPARATION

### Vercel Account
- [ ] Created Vercel account (vercel.com)
- [ ] Connected GitHub account to Vercel
- [ ] Authorized Vercel to access repositories

### Build Settings Verification
Vercel should auto-detect from `vercel.json`:
- [ ] Framework: Vite
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Install Command: `npm install`
- [ ] Node Version: 18.x

---

## 📋 FINAL CHECKS

### Before First Git Push
- [ ] Logo exists in `/public/emotivis-logo.png`
- [ ] All files saved
- [ ] No uncommitted critical changes
- [ ] `npm run build` succeeds
- [ ] Ready to run: `git add .`

### Before First Vercel Deployment
- [ ] Code pushed to GitHub
- [ ] `/public/emotivis-logo.png` visible in GitHub repo
- [ ] All files uploaded successfully
- [ ] Repository URL correct

### After Deployment
- [ ] Site loads at Vercel URL
- [ ] Logo appears (not broken)
- [ ] All sections visible
- [ ] Forms work
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SSL certificate active (https://)

---

## 🎉 DEPLOYMENT READY CRITERIA

You're ready to deploy if ALL these are TRUE:

✅ Logo file exists at `/public/emotivis-logo.png`
✅ `npm run build` completes without errors
✅ `npm run preview` shows working site
✅ Logo displays when testing locally
✅ All forms open and submit
✅ No console errors in browser
✅ Mobile responsive works
✅ Git repository initialized
✅ GitHub repository created
✅ Vercel account set up

**All checked?** → Proceed to [DEPLOYMENT.md](DEPLOYMENT.md)!

---

## ❌ NOT READY IF...

🚫 Logo file missing from `/public` folder
🚫 `npm run build` fails with errors
🚫 Console shows TypeScript errors
🚫 Broken image icon appears instead of logo
🚫 Forms don't open or submit
🚫 Any section fails to render

**Fix these issues first before deploying!**

---

## 📞 HELP RESOURCES

If you encounter issues:
1. **[SETUP.md](SETUP.md)** - Setup troubleshooting
2. **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment help
3. **[GITHUB-COMMANDS.txt](GITHUB-COMMANDS.txt)** - Git commands reference
4. **Browser console (F12)** - Check for error messages
5. **Terminal output** - Read error messages carefully

---

## ✅ CHECKLIST SUMMARY

**CRITICAL (Must have):**
- ✅ Logo in `/public/emotivis-logo.png`
- ✅ `npm run build` succeeds
- ✅ Site works locally

**RECOMMENDED:**
- ✅ Tested on mobile
- ✅ Tested in multiple browsers
- ✅ No console errors

**READY TO DEPLOY:**
- ✅ All critical items complete
- ✅ Code pushed to GitHub
- ✅ Vercel account ready

🚀 **Let's deploy!** Follow [DEPLOYMENT.md](DEPLOYMENT.md)
