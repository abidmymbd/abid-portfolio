# Portfolio Website

A modern, responsive portfolio website built with React, Vite, React Router, Tailwind CSS, and DaisyUI.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive
- 🎨 Tailwind CSS + DaisyUI for styling
- ⚡ Lightning fast with Vite
- 🧭 React Router for navigation
- 🎯 Sections: Hero, About, Services, Experience, Testimonials, Portfolio, Partners, Blog, Contact

## Installation

1. Extract the ZIP file
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build

Build for production:

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Customization

### Colors
Edit the primary color in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#FF6B35', // Change this to your brand color
    },
  },
}
```

### Images
Replace the placeholder images from Unsplash with your own images in the components.

### Content
Update the text content in each component file located in `src/components/`.

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- DaisyUI
- React Icons

## License

MIT
```

```text file=".gitignore"
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
