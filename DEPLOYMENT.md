# 🚀 Quick Deployment Guide

## GitHub Pages Deployment (Recommended)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `portfolio` or `my-portfolio`
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Your Files
1. **Option A: Upload via GitHub Interface**
   - Click "uploading an existing file"
   - Drag and drop all your files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
   - Click "Commit changes"

2. **Option B: Upload via Git (Advanced)**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages
1. Go to your repository
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch
6. Click **Save**

### Step 4: Access Your Website
- Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio`
- It may take a few minutes to deploy
- Check the **Actions** tab for deployment status

## Alternative: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag your entire project folder to the deploy area
3. Get instant live URL
4. Customize domain if needed

## Customization Before Deployment

### Update Personal Information:
- **Name**: Replace "Your Name" in `index.html`
- **Title**: Update job title and description
- **Skills**: Add your actual skills
- **Projects**: Include your real projects
- **Contact**: Add your email and social links

### Add Your Photos:
- Replace placeholder elements with real images
- Use optimized images (WebP format recommended)
- Keep file sizes under 500KB

## Testing Your Deployment

### Before Going Live:
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify contact form
- [ ] Test navigation
- [ ] Check loading speed

### Performance Check:
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools
- Aim for 90+ scores across all categories

## Common Issues & Solutions

### Page Not Loading:
- Check repository is public
- Verify GitHub Pages is enabled
- Wait 5-10 minutes for deployment

### Styling Issues:
- Check file paths in HTML
- Ensure CSS file is uploaded
- Clear browser cache

### JavaScript Not Working:
- Check browser console for errors
- Verify script.js is uploaded
- Test in different browsers

## Next Steps

1. **Customize Content**: Add your real information
2. **Add Images**: Replace placeholders with your photos
3. **Test Thoroughly**: Check on all devices
4. **Share**: Add to your resume and social profiles
5. **Update Regularly**: Keep projects and skills current

---

**Need Help?** Check the main README.md for detailed instructions!
