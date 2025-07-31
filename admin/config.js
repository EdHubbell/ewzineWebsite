// Decap CMS Configuration
const config = {
  backend: {
    name: 'github',
    repo: 'YOUR_GITHUB_USERNAME/ewzineWebsite', // Update this with your GitHub username
    branch: 'main',
  },
  media_folder: 'assets/images',
  public_folder: '/assets/images',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          name: 'home',
          label: 'Home Page',
          file: 'index.html',
          fields: [
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'body', label: 'Content', widget: 'markdown' }
          ]
        },
        {
          name: 'about',
          label: 'About Page',
          file: '_data/about.yml',
          fields: [
            { name: 'title', label: 'Page Title', widget: 'string' },
            { name: 'content', label: 'Content', widget: 'markdown' }
          ]
        }
      ]
    },
    {
      name: 'faq',
      label: 'FAQ',
      file: '_data/faq.yml',
      fields: [
        {
          name: 'items',
          label: 'FAQ Items',
          widget: 'list',
          fields: [
            { name: 'question', label: 'Question', widget: 'string' },
            { name: 'answer', label: 'Answer', widget: 'markdown' }
          ]
        }
      ]
    },
    {
      name: 'gallery',
      label: 'Gallery Images',
      file: '_data/gallery.yml',
      fields: [
        {
          name: 'images',
          label: 'Images',
          widget: 'list',
          fields: [
            { name: 'url', label: 'Image', widget: 'image' },
            { name: 'alt', label: 'Alt Text', widget: 'string' }
          ]
        }
      ]
    }
  ]
};

// Initialize CMS
window.CMS.init({ config });