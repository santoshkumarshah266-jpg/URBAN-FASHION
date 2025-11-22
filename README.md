# URBAN FASHION - Luxury Streetwear Website

A sophisticated, high-end website for a luxury streetwear brand built with React, Tailwind CSS, and GSAP animations.

## Features

- ✨ Smooth GSAP animations on hero section
- 🎨 Luxury black & gold color scheme
- 📱 Fully responsive design
- 🎯 Scroll-triggered animations with AOS
- 🔥 Interactive hover effects
- 🚀 Fast performance with Vite

## Tech Stack

- **React** - UI framework
- **Tailwind CSS** - Styling
- **GSAP** - Advanced animations
- **AOS** - Scroll animations
- **React Router** - Navigation
- **Vite** - Build tool

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Images

**IMPORTANT:** Place your images in these locations:

- **Logo**: Save to `public/images/logo/logo.png`
- **Hero Image**: Save to `public/images/hero/hero.jpg`

Optional (can add later):
- Lookbook images: `public/images/lookbook/look1.jpg` through `look6.jpg`
- Blog images: `public/images/blog/post1.jpg` through `post3.jpg`

### 3. Run Development Server
```bash
npm run dev
```

Open http://localhost:5173 in your browser

### 4. Build for Production
```bash
npm run build
```

## Project Structure

```
urban-fashion/
├── public/
│   └── images/
│       ├── logo/       # Logo image
│       ├── hero/       # Hero section image
│       ├── lookbook/   # Gallery images
│       └── blog/       # Blog post images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx  # Sticky navigation
│   │   ├── Hero.jsx    # Animated hero section
│   │   └── Footer.jsx  # Footer component
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Lookbook.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── tailwind.config.js
```

## Pages

- **Home** - Hero section with animated logo and tagline
- **About** - Brand story and values
- **Lookbook** - Editorial-style photo gallery
- **Blog** - Fashion insights and trends
- **Contact** - Contact form and social links

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  gold: '#D4AF37',
  black: '#000000',
  white: '#FFFFFF',
}
```

### Fonts
The site uses:
- **Montserrat** for headings (bold, modern)
- **Helvetica/Arial** for body text (clean, minimal)

## License

© 2025 URBAN FASHION. All rights reserved.
