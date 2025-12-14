# Harsh Narayan - Portfolio Website

A modern, colorful, and playful portfolio website built with React.js and Vite, inspired by creative design principles.

## 🚀 Features

- **Colorful & Playful Design**: Vibrant color scheme with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with React.js + Vite for optimal performance
- **Component-Based Architecture**: Clean, modular code structure for easy maintenance
- **Smooth Animations**: Engaging user experience with CSS animations
- **Fast Loading**: Optimized build with Vite

## 🛠️ Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **JavaScript (SWC)** - Fast JavaScript compiler
- **CSS3** - Styling with animations and gradients

## 📁 Project Structure

```
harsh-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx           # Hero section with animated name
│   │   ├── Hero.css
│   │   ├── Projects.jsx       # Projects showcase section
│   │   ├── Projects.css
│   │   ├── ProjectCard.jsx    # Individual project card
│   │   ├── ProjectCard.css
│   │   ├── About.jsx          # About section with education & skills
│   │   ├── About.css
│   │   ├── Footer.jsx         # Footer with social links
│   │   └── Footer.css
│   ├── App.jsx                # Main app component
│   ├── App.css
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/
├── package.json
└── vite.config.js
```

## 🎨 Design Features

### Hero Section
- Animated colorful name display with each letter in different colors
- Waving hand emoji animation
- Gradient background
- Highlighted text for key skills

### Projects Section
- Card-based layout with hover effects
- Colorful background gradients for each project
- Responsive grid layout

### About Section
- Two-card layout for Education and Toolkit
- Icon-based visual hierarchy
- Categorized skills display

### Footer
- Gradient background
- Social media links with hover effects
- Back to top button
- Colorful highlighted text

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to project directory:
```bash
cd harsh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Changing Colors

1. **Hero Section Colors** (`src/components/Hero.css`):
   - Update `.letter-*` classes for name colors
   - Modify `.highlight-*` classes for description highlights

2. **Project Card Colors** (`src/components/Projects.jsx`):
   - Update `bgColor` property in the projects array

3. **Gradients**:
   - Hero background: `Hero.css` - `.hero` class
   - About background: `About.css` - `.about-section` class
   - Footer background: `Footer.css` - `.footer` class

### Adding New Projects

Edit `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description here',
    bgColor: '#FFE5B4', // Hex color for card background
    link: 'https://github.com/yourusername/project',
    image: '/path/to/image.png' // Optional
  },
  // Add more projects...
];
```

### Updating Personal Information

1. **Education**: Edit `src/components/About.jsx`
2. **Skills**: Edit `src/components/About.jsx` in the Toolkit card
3. **Social Links**: Edit `src/components/Footer.jsx`
4. **Name & Description**: Edit `src/components/Hero.jsx`

## 📱 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to Your Domain (harshnarayan.dev)
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure your DNS to point to your server

## 🎓 Learning Resources

This project is built to be beginner-friendly. Here's what you can learn:

- **Component Structure**: How to organize React components
- **CSS Animations**: Keyframe animations and transitions
- **Responsive Design**: Mobile-first design principles
- **Gradient Backgrounds**: Creating beautiful color combinations
- **Vite Configuration**: Modern build tool setup

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Harsh Narayan**
- Portfolio: [harshnarayan.dev](https://harshnarayan.dev)
- GitHub: [@harshnarayan](https://github.com/harshnarayan)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Color schemes from various design resources

---

Made with ❤️ by Harsh Narayan
