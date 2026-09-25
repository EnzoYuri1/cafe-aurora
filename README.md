# ☕ Café Aurora

Landing page and digital menu for an artisanal coffee shop, built with a
focus on user experience, performance, and responsive design.
Project created from a Figma design and turned into code with Nuxt 3.

🔗 **Demo:** [sabor-do-para-delivery.onrender.com](https://sabor-do-para-delivery.onrender.com/)

## ✨ Features

### Storefront and navigation
- 🏠 Home with hero section, featured products, "about" section, and testimonials
- 📋 Full menu page, organized by category
- 🔍 Real-time search on the menu, combined with category filters
  (All, Coffees, Drinks, Desserts, Snacks)
- 🛍️ Product detail page with size selection, add-ons, and quantity,
  with dynamically updated price
- 📖 "About us" page with the coffee shop's story, philosophy, and highlights

### Shopping and cart
- 🛒 Side cart (drawer), no need to leave the page,
  with state management via Pinia
- 🔢 Item counter on the cart icon in the header

### Interface and accessibility
- 🌗 Light/dark mode with its own palette for each theme, tuned for
  contrast and readability (WCAG AA)
- 🎨 Smooth scroll-reveal animations while scrolling the page, respecting
  the user's reduced-motion preference
- ♿ Accessibility best practices (contrast, heading hierarchy,
  ARIA attributes, keyboard navigation)
- 📱 Fully responsive, mobile-first design

### Performance
- 🖼️ Optimized image loading with `@nuxt/image`: automatic
  WebP/AVIF conversion, lazy loading for below-the-fold images, and
  loading priority (`fetchpriority`) for each page's main images
- 💀 Skeleton loading with a shimmer effect while images load
- 🔌 Preconnect to the image CDN to reduce connection latency

## 🛠️ Tech stack

- [Nuxt 3](https://nuxt.com/) (Vue 3 + Composition API)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/) — cart state management
- [@nuxt/image](https://image.nuxt.com/) — image optimization
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) — light/dark mode

## 🚀 Running locally

```bash
# Clone the repository
git clone https://github.com/EnzoYuri1/cafe-aurora.git

# Install dependencies
cd cafe-aurora
npm install

# Run in development mode
npm run dev
```

Visit `http://localhost:3000`

## 📦 Production build

```bash
npm run build
node .output/server/index.mjs
```

## ☁️ Deploy

The project is hosted on [Render](https://render.com) as a
**Web Service** (Nuxt 3 runs in SSR/server mode, not as a static site).

Configuration used:

| Field | Value |
|---|---|
| Runtime | Node |
| Build Command | `npm install && npm run build` |
| Start Command | `node .output/server/index.mjs` |
| `NODE_VERSION` variable | `20` |
| `SERVER_PRESET` variable | `render_com` |

## 📄 Project structure

```
├── components/     # Reusable components (Header, Footer, ProductCard,
│                   # CartDrawer, LazyImage, ImageSkeleton, etc.)
├── pages/          # Routes (Home, Menu, Product detail, About)
├── stores/         # Pinia store (cart)
├── composables/    # Composables (e.g., scroll reveal)
├── assets/         # Styles and static assets
└── nuxt.config.ts  # Project configuration
```

## 👤 Author

Built by [Enzo Yuri](https://github.com/EnzoYuri1)