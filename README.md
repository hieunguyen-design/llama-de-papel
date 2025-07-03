# 🌮 Llama de Papel — Restaurant Website

**Llama de Papel** is a modern, responsive website for a fictional taco restaurant. Built with vanilla JavaScript, Webpack, and custom CSS, the site features a dynamic homepage, menu rendering from data, an About page, and deployment to GitHub Pages.

---

## 🔗 Live Site

## 👉 [View the Website on GitHub Pages](https://hieunguyen-design.github.io/llama-de-papel/)

---

## 🔧 Tech Stack

- HTML / CSS / JavaScript
- Webpack 5 (bundler)
- Git / GitHub for version control
- GitHub Pages for deployment

---

## 🚀 Features

- Responsive layout with grid-based menu
- Modular code structure using JS components
- DOM manipulation without frameworks
- Fan favorite items rendered from JS data
- Mobile-friendly footer and navigation

---

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/hieunguyen-design/restaurant-page.git
cd restaurant-page

# Install dependencies
npm install

# Run Webpack to bundle
npx webpack

# OR run in watch mode for dev
npx webpack --watch
```

---

## 🌐 Deployment (GitHub Pages)

### Fist time Setup

```bash
# Create a deployment branch
git branch gh-pages
```

### Deploy or Redeploy

```bash
# Switch and sync

git checkout gh-pages && git merge main --no-edit

# Build

npx webpack

# Commit and push dist

git add dist -f
git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages

# Go back to main
git checkout main
```

---

## Project Structure

```
restaurant-page/
│
├── dist/               # Production-ready build (used for GitHub Pages)
├── src/                # Source files
│   ├── index.js
│   ├── modules/        # Optional: separate JS modules
│   └── assets/         # Images, logos, etc.
│
├── webpack.config.js   # Webpack config
├── package.json
└── README.md
```

## 🙏 Acknowledgments

- Images from Unsplash and Freepik

- Inspired by The Odin Project's JavaScript curriculum

---

## 📝 License

```vbnet
This project is for educational/demo purposes and not intended for commercial use.
```
