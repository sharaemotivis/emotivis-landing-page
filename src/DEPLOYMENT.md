# 🚀 Deployment Guide - Emotivis Landing Page

Complete step-by-step guide to deploy your Emotivis landing page to GitHub and Vercel.

---

## ⚠️ PRE-DEPLOYMENT CHECKLIST

**CRITICAL:** Complete these steps BEFORE pushing to GitHub:

### 1. Verify All Files Are Present
```bash
# Check if all files exist
ls -la

# You should see:
# ✅ App.tsx
# ✅ package.json
# ✅ vite.config.ts
# ✅ vercel.json
# ✅ .gitignore
```

### 2. Test Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test production build
npm run build
npm run preview
```

**Verify:**
- [ ] Logo appears correctly in navigation (from ImageKit URL)
- [ ] All sections load properly
- [ ] Forms open and submit
- [ ] No console errors
- [ ] Responsive design works on mobile

---

## 📂 PART 1: Push to GitHub

### Step 1: Initialize Git (if not already done)
```bash
git init
```

### Step 2: Create Repository on GitHub
1. Go to [github.com](https://github.com)
2. Click **"New repository"** (+ icon in top right)
3. Repository name: `emotivis-landing`
4. Description: `Emotivis AI-powered EI training platform landing page`
5. Choose **Private** or **Public**
6. **DO NOT** initialize with README (we already have one)
7. Click **"Create repository"**

### Step 3: Connect Local Repository to GitHub
```bash
# Add remote origin (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/emotivis-landing.git

# Verify remote was added
git remote -v
```

### Step 4: Stage All Files
```bash
# Add all files to staging
git add .

# Check what will be committed
git status

# You should see:
# ✅ All component files
# ✅ package.json
# ✅ All other project files
```

### Step 5: Commit Changes
```bash
git commit -m "Initial commit: Emotivis landing page with dark futuristic theme"
```

### Step 6: Push to GitHub
```bash
# Push to main branch
git push -u origin main

# If you get an error about 'master' vs 'main', try:
git branch -M main
git push -u origin main
```

### Step 7: Verify on GitHub
1. Go to your repository URL: `https://github.com/YOUR-USERNAME/emotivis-landing`
2. **VERIFY** these files exist:
   - ✅ `package.json`
   - ✅ `vercel.json`
   - ✅ All component files
   - ✅ `lib/assets.ts` (contains logo URL)

---

## 🚀 PART 2: Deploy to Vercel

### Method A: Vercel Dashboard (Recommended)

#### Step 1: Sign Up / Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. **Connect with GitHub** (recommended)
4. Authorize Vercel to access your GitHub account

#### Step 2: Import Repository
1. Click **"Add New..."** → **"Project"**
2. Find your `emotivis-landing` repository
3. Click **"Import"**

#### Step 3: Configure Project
Vercel should auto-detect everything from `vercel.json`:

**Framework Preset:** Vite ✅ (auto-detected)

**Build Settings:**
- Build Command: `npm run build` ✅ (auto-detected)
- Output Directory: `dist` ✅ (auto-detected)
- Install Command: `npm install` ✅ (auto-detected)

**Root Directory:** `./` ✅

**Node Version:** 18.x ✅ (auto-detected)

**⚠️ DO NOT CHANGE THESE SETTINGS** - They are already configured in `vercel.json`

#### Step 4: Deploy
1. Click **"Deploy"**
2. Wait 1-3 minutes for build
3. You'll see a success screen with your deployment URL

#### Step 5: Verify Deployment
1. Click **"Visit"** to open your deployed site
2. **CHECK THESE:**
   - [ ] Logo appears in navigation (not broken image)
   - [ ] All sections load correctly
   - [ ] Forms open and work
   - [ ] Integrations logos show
   - [ ] Mobile responsive design works
   - [ ] No console errors (open DevTools)

#### Step 6: Set Up Custom Domain (Optional)
1. In Vercel dashboard, click **"Settings"** → **"Domains"**
2. Add your domain: `emotivis.com` or `www.emotivis.com`
3. Follow DNS configuration instructions
4. SSL certificate is automatic ✅

---

### Method B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 🔄 ONGOING DEPLOYMENT (Updates)

### When You Make Changes

```bash
# 1. Make your changes to files
# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Description of changes"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys! ✨
# Check deployment status at vercel.com/dashboard
```

Vercel automatically rebuilds and deploys every time you push to GitHub!

---

## ❌ TROUBLESHOOTING

### Logo Not Showing After Deployment

**Problem:** Broken image icon where logo should be

**Solution:**
```bash
# 1. Check if ImageKit URL is accessible
# Open in browser: https://ik.imagekit.io/r6ei9doug/icon.png?updatedAt=1761460511561

# 2. Verify lib/assets.ts has correct URL
cat lib/assets.ts | grep logoImage

# 3. If URL is wrong, update it and redeploy
git add lib/assets.ts
git commit -m "Fix logo URL"
git push
```

### Build Fails on Vercel

**Problem:** Build error during deployment

**Common Solutions:**

1. **Check Node version:**
   - Vercel uses Node 18.x
   - Test locally with Node 18: `node -v`

2. **Check build locally:**
   ```bash
   npm run build
   # If this fails locally, fix errors first
   ```

3. **Check Vercel build logs:**
   - Go to Vercel dashboard → Deployments → Click failed deployment
   - Read error messages
   - Fix issues and push again

4. **Clear Vercel cache:**
   - Go to Settings → General → scroll to "Build & Development Settings"
   - Click "Clear Cache"
   - Redeploy

### Integration Logos Not Loading

**Problem:** Clearbit logos show broken images

**This is normal for some companies!** Clearbit doesn't have logos for all domains.

**Solution:**
- The code includes fallback text (company name)
- Most major platforms (Salesforce, HubSpot, Zendesk) work fine
- For missing logos, you can replace with custom logos in `/public/` if needed

### Page Shows White Screen

**Problem:** Blank page after deployment

**Solutions:**

1. **Check browser console:**
   - Press F12 → Console tab
   - Look for errors

2. **Check if assets loaded:**
   - Go to Network tab
   - Refresh page
   - Ensure all files load (200 status)

3. **Verify build output:**
   ```bash
   npm run build
   ls dist/
   # Should contain index.html, assets/, etc.
   ```

---

## 📊 DEPLOYMENT CHECKLIST

### Before First Deployment
- [ ] Tested locally with `npm run dev`
- [ ] Logo appears from ImageKit URL
- [ ] Tested production build with `npm run build && npm run preview`
- [ ] All forms tested and working
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub

### After Deployment
- [ ] Site loads at Vercel URL
- [ ] Logo displays correctly (not broken)
- [ ] All sections visible and styled correctly
- [ ] Forms open and submit
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Integration logos load (most of them)
- [ ] Gradients and animations working

### Optional Enhancements
- [ ] Custom domain configured
- [ ] Analytics added (Google Analytics, Vercel Analytics)
- [ ] SEO meta tags added
- [ ] Open Graph images configured
- [ ] Performance optimized (Lighthouse score)

---

## 🆘 NEED HELP?

### Resources
- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Vite Documentation:** [vitejs.dev](https://vitejs.dev)
- **GitHub Guides:** [guides.github.com](https://guides.github.com)

### Common Issues
- **Logo not showing:** Verify ImageKit URL is accessible and correct in `/lib/assets.ts`
- **Build errors:** Run `npm run build` locally first to catch errors
- **404 errors:** Check that `vercel.json` is present in repository
- **CORS errors:** ImageKit URL should work, but check browser console

---

## ✅ SUCCESS!

Your Emotivis landing page is now live! 🎉

**Next Steps:**
1. Share the Vercel URL with your team
2. Set up custom domain (optional)
3. Add analytics tracking
4. Monitor performance in Vercel dashboard
5. Make updates by pushing to GitHub

**Auto-deployment is active:** Every push to GitHub automatically deploys to Vercel!

---

**Need to make changes?** Just edit files, commit, and push - Vercel handles the rest! 🚀
