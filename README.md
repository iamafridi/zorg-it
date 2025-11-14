# Pixll - Digital Experience Studio Website

A modern, responsive portfolio website for a digital agency built with React, showcasing services, recent work, and featured insights with stunning animations and glassmorphism design.

# Demo

## 🚀 Tech Stack

- **React** (18+)
- **React Router DOM**
- **Tailwind CSS**
- **DaisyUI**
- **Vite**

## 📁 Folder Structure

```
src/
├── assets/                    )
│   ├── Banner/
│   ├── Icons/
│   ├── Logo/
│   └── PageImages/
│
├── layouts/
│   └── MainLayout.jsx
│
├── Pages/
│   ├── About/
│   │   └── About.jsx
│   │
│   ├── Blog/
│   │   └── Blog.jsx
│   ├── Components/
│   │   └── ShowcaseGrid.jsx
│   │
│   ├── Contact/
│   │   └── Contact.jsx
│   │
│   ├── Home/
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── companyLogo/
│   │   │   └── companyLogo.jsx
│   │   ├── Feature/
│   │   │   └── Feature.jsx
│   │   ├── Home.jsx
│   │   ├── RecentWork/
│   │   │   └── RecentWork.jsx
│   │   └── Service/
│   │       └── Service.jsx
│   │
│   ├── shared/
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Logo/
│   │   │   └── Logo.jsx
│   │   └── Navbar/
│   │       └── Navbar.jsx
│   │
│   └── Work/
│       └── Work.jsx
│
├── index.css
└── main.jsx
```

## 🎯 Key Features

### Design & UX

- **Glassmorphism Effects** - Modern glass-like UI elements with backdrop blur
- **Smooth Animations** - Hover effects, scale transforms, and opacity transitions
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Interactive Cards** - Hover states with image scaling and border color changes

### Navigation

- **React Router** - Client-side routing for seamless page transitions
- **Responsive Navbar** - Mobile hamburger menu with glassmorphic dropdown

## 🛠️ Design Decisions & Assumptions

### 1. **React Router Implementation**

Implemented React Router DOM for future scalability and to enable:

- Multiple page navigation without full page reloads
- Better SEO optimization potential
- Easy addition of new pages/routes
- Smooth user experience with instant page transitions

### 2. **Interactive Hover Animations**

Enhanced the Recent Work section with interactive hover effects:

- Image scale transforms (110%) on hover
- Border color transitions matching project themes
- Opacity changes for "Open" CTAs
- 700ms duration for smooth, professional feel

### 3. **Glassmorphism Design Pattern**

Applied glass-like UI elements throughout:

- `backdrop-blur-xl` for depth and modern aesthetic
- `bg-black/50` semi-transparent backgrounds
- Border with `border-white/10` for subtle definition
- Matches current design trends in 2024-2025

### 4. **Component Modularity**

Separated concerns into small, reusable components:

- Easier maintenance and debugging
- Reusable components like Logo, CompanyLogo
- Shared components (Navbar, Footer) in dedicated folder
- Page-specific components in their respective directories

### 5. **Mobile-First Responsive Approach**

Used Tailwind's responsive prefixes (`md:`, `lg:`) for:

- Flexible grid layouts that adapt to screen sizes
- Mobile hamburger menu with dropdown
- Font size scaling across breakpoints
- Spacing adjustments for optimal viewing

### 6. **Asset Organization**

Structured assets by feature/section:

- Banner assets grouped together
- Icons in dedicated folder
- Page-specific images in PageImages
- Easier asset management and imports

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

For inquiries: [Afridi Here](https://iamafrididev.netlify.app/)

---
