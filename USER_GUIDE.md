# ewzine Website User Guide

## Overview
This website is built with Jekyll and uses Decap CMS for easy content management. You can update content without knowing how to code!

## Initial Setup

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at: `https://[your-username].github.io/ewzineWebsite/`

### 2. Configure Decap CMS
1. Edit `admin/config.js` and update line 4:
   - Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
2. Commit and push this change

### 3. Set up CMS Authentication
1. Go to https://app.netlify.com and sign up for a free account
2. Click "New site from Git" but DON'T actually create a site
3. Go to "Site settings" → "Identity" → "Enable Identity"
4. Under "Registration", select "Invite only"
5. Under "External providers", add "GitHub"
6. Under "Git Gateway", enable it

## Updating Content

### Method 1: Using Decap CMS (Recommended)
1. Go to `https://[your-username].github.io/ewzineWebsite/admin/`
2. Log in with your GitHub account
3. You'll see different content sections:
   - **Pages**: Edit home and about page content
   - **FAQ**: Add, edit, or remove FAQ items
   - **Gallery**: Upload and manage gallery images

### Method 2: Direct GitHub Editing
You can also edit files directly on GitHub:

#### Update FAQ
1. Go to `_data/faq.yml` in your repository
2. Click the pencil icon to edit
3. Add new questions following this format:
```yaml
- question: "Your question here?"
  answer: "Your answer here. You can use **bold** and *italic* text."
```

#### Update About Page
1. Go to `_data/about.yml`
2. Edit the content section
3. You can use Markdown formatting

#### Update Gallery Images
1. Upload images to `assets/images/` folder
2. Edit `_data/gallery.yml` to add them:
```yaml
- url: /assets/images/your-image.jpg
  alt: "Description of your image"
```

## Adding Images

### For the Zoopraxiscope Gallery
1. Prepare your images:
   - Recommended size: 800x600px
   - Format: JPG or PNG
   - Name them descriptively (e.g., `artwork-title-1.jpg`)

2. Upload via GitHub:
   - Navigate to `assets/images/`
   - Click "Upload files"
   - Drag and drop your images
   - Commit the changes

3. Add to gallery:
   - Edit `_data/gallery.yml`
   - Add entries for each new image

## Styling Notes

The website uses a retro computer terminal aesthetic with:
- Green text on black background
- Monospace fonts
- Glitch effects on the homepage
- Minimal, stark design

To maintain this aesthetic:
- Keep text concise
- Use simple, direct language
- Avoid too many images outside the gallery

## Testing Locally (Optional)

If you want to preview changes before publishing:

1. Install Ruby and Jekyll on your computer
2. Clone your repository
3. Run these commands:
```bash
bundle install
bundle exec jekyll serve
```
4. Open http://localhost:4000 in your browser

## Troubleshooting

### Site not showing up?
- Check GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for initial deployment
- Check for build errors in Actions tab

### CMS not working?
- Ensure you've updated the GitHub username in `admin/config.js`
- Check you're logged into GitHub
- Try clearing browser cache

### Images not displaying?
- Verify image paths start with `/assets/images/`
- Check file names don't have spaces
- Ensure images are committed to repository

## Need Help?

- Check Jekyll documentation: https://jekyllrb.com/docs/
- Decap CMS docs: https://decapcms.org/docs/
- GitHub Pages: https://docs.github.com/en/pages