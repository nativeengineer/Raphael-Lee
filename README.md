# Raphael Lee - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS. Features a dark theme with flat UI design, smooth animations, and mobile-first responsive design.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite for fast development and building
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark Theme**: Flat UI design with neon accent colors
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Interactive Components**: 
  - Animated SVG illustrations
  - Particle background effects
  - Expandable project cards
  - Contact form with EmailJS integration
- **Performance Optimized**: Fast loading with code splitting and optimization

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, React Router DOM
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons, Simple Icons
- **Forms**: EmailJS for contact form
- **Deployment**: Ready for Vercel, Netlify, or any static host

## 🎨 Design System

### Colors
- **Background**: #0d0d0d (dark-bg)
- **Surface**: #1a1a1a (dark-surface) 
- **Card**: #262626 (dark-card)
- **Accent Purple**: #8b5cf6
- **Accent Blue**: #3b82f6
- **Accent Green**: #10b981
- **Accent Pink**: #ec4899

### Typography
- **Font Family**: Inter (Google Fontas)
- **Responsive text scaling** with Tailwind utilities

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📧 Email Configuration

To enable the contact form:

1. **Sign up for EmailJS** at [emailjs.com](https://emailjs.com)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Update the configuration** in `src/components/sections/Contact.jsx`:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',    // Replace with your service ID
     'YOUR_TEMPLATE_ID',   // Replace with your template ID
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
       to_name: 'Andrew M.',
     },
     'YOUR_PUBLIC_KEY'     // Replace with your public key
   )
   ```

## 📄 Resume Setup

1. **Add your resume PDF** to the `public` folder as `andrew-m-resume.pdf`
2. **Update contact information** in `src/components/sections/Contact.jsx`
3. **Update social links** with your actual profiles

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `src/components/sections/Home.jsx` - Name and title
- `src/components/sections/About.jsx` - Bio and experience
- `src/components/sections/Skills.jsx` - Your skills and technologies
- `src/components/sections/Projects.jsx` - Your projects
- `src/components/sections/Contact.jsx` - Contact information

### Colors & Styling
- **Tailwind Config**: Modify `tailwind.config.js` for custom colors
- **CSS Variables**: Update `src/index.css` for additional styling
- **Component Styles**: Each component uses Tailwind classes for easy customization

### Animations
- **Framer Motion**: Customize animations in individual components
- **CSS Animations**: Additional keyframes defined in `src/index.css`

## 📱 Responsive Breakpoints

- **Mobile**: Default styles (< 768px)
- **Tablet**: md: (768px+)
- **Desktop**: lg: (1024px+)
- **Large Desktop**: xl: (1280px+)

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Deploy to Vercel
1. **Connect your repository** to Vercel
2. **Vercel will auto-detect** the Vite configuration
3. **Deploy** with default settings

### Deploy to Netlify
1. **Connect your repository** to Netlify
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.jsx
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── AnimatedIllustration.jsx
│       └── ParticleBackground.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you find any bugs or have suggestions for improvements, please open an issue.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help customizing the portfolio, feel free to reach out!