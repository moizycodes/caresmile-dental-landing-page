# 🦷 CareSmile — Dental Care Landing Page

<p align="center">
  <strong>A Modern, Responsive & Professional Dental Care Website</strong>
</p>

<p align="center">
  A beautifully designed dental care landing page built with React.js and Tailwind CSS CLI, focused on delivering a clean, modern, accessible, and responsive user experience across all devices.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Responsive-Design-22C55E?style=for-the-badge" alt="Responsive Design" />
  <img src="https://img.shields.io/badge/Status-In_Development-orange?style=for-the-badge" alt="Project Status" />
</p>

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Project Objectives](#-project-objectives)
- [Design Reference](#-design-reference)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Development Commands](#-development-commands)
- [Tailwind CSS CLI Configuration](#-tailwind-css-cli-configuration)
- [Project Structure](#-project-structure)
- [Website Sections](#-website-sections)
- [Responsive Design Strategy](#-responsive-design-strategy)
- [Component Architecture](#-component-architecture)
- [Assets Management](#-assets-management)
- [Code Quality Guidelines](#-code-quality-guidelines)
- [Build & Deployment](#-build--deployment)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Connect With Me](#-connect-with-me)

---

## 🦷 About The Project

**CareSmile** is a modern and responsive dental care clinic landing page designed to establish a professional online presence for dental healthcare services.

The project focuses on combining an attractive visual interface with an intuitive user experience, allowing visitors to explore dental treatments, learn about the clinic, discover experienced dentists, read patient testimonials, and book appointments.

The website is developed using **React.js (Create React App)** and **Tailwind CSS (Latest Version) through the official Tailwind CLI**.

The design is based on a Figma community design reference and is being implemented with attention to visual accuracy, responsive layouts, reusable components, and maintainable code.

### Project Information

| Information        | Details                       |
| ------------------ | ----------------------------- |
| Project Name       | CareSmile                     |
| Project Type       | Dental Care Landing Page      |
| Repository         | caresmile-dental-landing-page |
| Frontend           | React.js                      |
| Project Setup      | Create React App              |
| CSS Framework      | Tailwind CSS                  |
| CSS Compiler       | Tailwind CSS CLI              |
| Language           | JavaScript (JSX)              |
| Icons              | Lucide React                  |
| Carousel           | Swiper.js                     |
| Design Tool        | Figma                         |
| Development Status | In Development                |
| Author             | Abdul Moeez Tariq             |

---

## 🎯 Project Objectives

The primary objectives of CareSmile are:

- Create a professional and visually appealing dental clinic website.
- Reproduce the provided Figma design as accurately as possible.
- Ensure a consistent experience across desktop, tablet, and mobile devices.
- Build reusable and maintainable React components.
- Implement modern styling using Tailwind CSS CLI.
- Create a clean and scalable project architecture.
- Improve usability through intuitive navigation and clear calls to action.
- Follow modern frontend development practices.

---

## 🎨 Design Reference

The UI/UX design is based on the following Figma community design:

**Figma Design:**  
https://www.figma.com/design/Mr98TSPHAMlzhj8NHfpzkK/Free-Dental-Care-Responsive-Landing-Page--Community-?node-id=0-1

The implementation follows the provided desktop and tablet design references, with additional responsive optimization for mobile devices.

---

## ✨ Features

### Design & User Experience

- Modern dental healthcare interface.
- Clean and professional visual design.
- Soft blue and white color palette.
- Consistent typography and spacing.
- Reusable UI components.
- Smooth navigation experience.
- Responsive layouts for different screen sizes.

### Website Sections

- Responsive Header & Navigation
- Hero Section
- Clinic Partners
- About Our Clinic
- Dental Treatments & Services
- Clinic Statistics
- Professional Dentists
- Appointment Promotion Banner
- Patient Testimonials
- Latest Blogs & News
- Newsletter Subscription
- Comprehensive Footer

### Technical Features

- Component-based React architecture.
- Tailwind CSS CLI integration.
- Reusable JavaScript data files.
- Responsive utility-first styling.
- Optimized image handling.
- Interactive navigation elements.
- Carousel functionality using Swiper.js.
- Clean and organized source code.

---

## 🛠️ Tech Stack

The project uses the following technologies and tools:

| Technology        | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| React.js          | Frontend library                                |
| Create React App  | React project setup and development environment |
| JavaScript (ES6+) | Application programming                         |
| Tailwind CSS v4   | Utility-first CSS framework                     |
| Tailwind CSS CLI  | CSS compilation                                 |
| Lucide React      | Icon library                                    |
| Swiper.js         | Interactive sliders and carousels               |
| HTML5             | Website structure                               |
| CSS3              | Custom styling                                  |
| Git               | Version control                                 |
| GitHub            | Source code hosting                             |
| Figma             | UI/UX design reference                          |

---

## 💻 Getting Started

Follow the instructions below to set up and run CareSmile locally.

### Prerequisites

Make sure the following tools are installed on your system:

- Node.js (LTS version recommended)
- npm (Node Package Manager)
- Git
- Visual Studio Code (Recommended)

Verify your installations:

```bash
node -v
npm -v
git --version
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/moizycodes/caresmile-dental-landing-page.git
```

### 2. Navigate to the Project Directory

```bash
cd caresmile-dental-landing-page
```

### 3. Install Project Dependencies

```bash
npm install
```

### 4. Install Tailwind CSS CLI

```bash
npm install -D tailwindcss @tailwindcss/cli
```

### 5. Install Additional Packages

```bash
npm install lucide-react swiper
```

### 6. Start Tailwind CSS Watch Mode

Open your first terminal:

```bash
npm run tailwind:watch
```

This command watches your source files and automatically generates the compiled CSS whenever changes are detected.

### 7. Start React Development Server

Open a second terminal:

```bash
npm start
```

The application will be available at:

**http://localhost:3000**

Keep both terminals running during development.

---

## ⚙️ Development Commands

The following commands are available for project development and maintenance.

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `npm install`            | Install all dependencies         |
| `npm start`              | Start React development server   |
| `npm run tailwind:watch` | Watch and compile Tailwind CSS   |
| `npm run tailwind:build` | Generate minified production CSS |
| `npm run build`          | Create React production build    |
| `npm test`               | Run available React tests        |

### Recommended Development Workflow

Run these commands in separate terminals:

**Terminal 1 — Tailwind CSS CLI**

```bash
npm run tailwind:watch
```

**Terminal 2 — React Development Server**

```bash
npm start
```

This setup allows React and Tailwind CSS to work simultaneously during development.

---

## 🎨 Tailwind CSS CLI Configuration

CareSmile uses the latest Tailwind CSS CLI workflow.

### Installation

```bash
npm install -D tailwindcss @tailwindcss/cli
```

### Input CSS File

Location:

`src/styles/index.css`

```css
@import "tailwindcss";
```

### Package Scripts

Add the following scripts inside the `package.json` file:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "tailwind:watch": "npx @tailwindcss/cli -i ./src/styles/index.css -o ./src/output.css --watch",
    "tailwind:build": "npx @tailwindcss/cli -i ./src/styles/index.css -o ./src/output.css --minify"
  }
}
```

### Import Compiled CSS

Inside `src/index.js`:

```jsx
import "./output.css";
```

**Important:** Tailwind CSS v4 uses its CSS-first configuration approach. A traditional `tailwind.config.js` file is not required for this basic setup.

The generated `src/output.css` file should not be manually edited.

---

## 📁 Project Structure

The project follows a component-based folder architecture to maintain clean, reusable, and scalable code.

```text
caresmile-dental-landing-page/
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-doctor.png
│   │   ├── about-doctor.png
│   │   ├── dentist-1.png
│   │   ├── dentist-2.png
│   │   ├── dentist-3.png
│   │   ├── appointment-doctor.png
│   │   └── blog/
│   │       ├── blog-1.jpg
│   │       ├── blog-2.jpg
│   │       └── blog-3.jpg
│   │
│   ├── icons/
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── Container.jsx
│   │   │   └── SocialLinks.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Partners.jsx
│   │       ├── About.jsx
│   │       ├── Services.jsx
│   │       ├── Statistics.jsx
│   │       ├── Dentists.jsx
│   │       ├── AppointmentCTA.jsx
│   │       ├── Testimonials.jsx
│   │       └── Blog.jsx
│   │
│   ├── data/
│   │   ├── navigationData.js
│   │   ├── servicesData.js
│   │   ├── dentistsData.js
│   │   ├── testimonialsData.js
│   │   ├── blogData.js
│   │   └── statisticsData.js
│   │
│   ├── hooks/
│   │   └── useMobileMenu.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── utils/
│   │   └── constants.js
│   │
│   ├── App.js
│   ├── index.js
│   └── output.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tailwind.config.js (optional)
```

### Folder Responsibilities

| Folder                     | Description                       |
| -------------------------- | --------------------------------- |
| `public/images/`           | Static images and visual assets   |
| `public/icons/`            | Public icon assets                |
| `src/assets/`              | Imported images, icons and fonts  |
| `src/components/common/`   | Shared reusable UI components     |
| `src/components/layout/`   | Header, navigation and footer     |
| `src/components/sections/` | Individual landing page sections  |
| `src/data/`                | Reusable static content and data  |
| `src/hooks/`               | Custom React hooks                |
| `src/pages/`               | Page-level components             |
| `src/styles/`              | Global styles and CSS entry point |
| `src/utils/`               | Helper functions and constants    |

---

## 🧩 Website Sections

The CareSmile landing page is organized into the following sections:

### 1. Header & Navigation

- Clinic logo and branding.
- Contact information.
- Appointment booking button.
- Desktop navigation links.
- Search interface.
- Responsive mobile navigation.

### 2. Hero Section

- Welcome message.
- Main dental care headline.
- Supporting description.
- Primary call-to-action.
- Video or informational link.
- Dentist image and decorative floating elements.

### 3. Clinic Partners

- Partner organization logos.
- Consistent logo sizing.
- Responsive horizontal layout.

### 4. About Us

- Dentist or healthcare professional image.
- Clinic introduction.
- Supporting content.
- Key clinic benefits.
- Read More link.

### 5. Dental Treatments

The services section highlights available dental treatments, including:

- Lawn Fertilization (as shown in the design reference; verify final service terminology before implementation).
- Dental Bridge.
- General Dentistry.
- Cavity Inspection.
- Live Advisory.

Each service card contains an icon, title, short description, and Learn More link.

### 6. Clinic Statistics

Displays key clinic figures such as:

- Clinics.
- Countries.
- Years of Experience.
- Partners.

### 7. Our Dentists

- Dentist profile cards.
- Professional images.
- Dentist names and specialties.
- Social media links.
- Carousel navigation.

### 8. Appointment CTA

- Promotional discount offer.
- Appointment booking call-to-action.
- Dentist image.
- Supporting description.

### 9. Patient Testimonials

- Patient feedback cards.
- Star ratings.
- Patient profile images.
- Review descriptions.

### 10. Blog & News

- Featured article.
- Additional blog cards.
- Article images.
- Blog titles and descriptions.
- Read More links.

### 11. Footer

- Clinic branding.
- Newsletter subscription.
- Social media links.
- Navigation links.
- Services links.
- Contact information.
- Copyright information.

---

## 📱 Responsive Design Strategy

CareSmile is designed to provide an optimized browsing experience across desktop, tablet, and mobile devices.

| Device        | Screen Width  | Layout Strategy              |
| ------------- | ------------- | ---------------------------- |
| Mobile        | 320px–767px   | Single-column layout         |
| Tablet        | 768px–1023px  | Adjusted grids and spacing   |
| Small Desktop | 1024px–1279px | Flexible multi-column layout |
| Large Desktop | 1280px+       | Full desktop design          |

### Responsive Development Principles

- Mobile-first styling approach.
- Flexible layouts using CSS Grid and Flexbox.
- Responsive typography.
- Optimized image dimensions.
- Consistent spacing across breakpoints.
- Mobile-friendly navigation.
- No unwanted horizontal scrolling.
- Proper card stacking and alignment.

The final implementation will be tested across multiple viewport sizes to ensure visual consistency.

---

## 🧱 Component Architecture

CareSmile uses reusable React components to simplify development and improve maintainability.

### Common Components

**Button.jsx**

Reusable button component for primary and secondary actions.

**SectionHeading.jsx**

Standardized heading component for landing page sections.

**Container.jsx**

Reusable responsive layout container.

**SocialLinks.jsx**

Reusable social media icon links.

### Layout Components

**Header.jsx**

Main website header.

**Navbar.jsx**

Desktop navigation.

**MobileMenu.jsx**

Mobile navigation interface.

**Footer.jsx**

Website footer and contact information.

### Section Components

Each landing page section is developed independently inside:

`src/components/sections/`

This structure keeps the main application clean and makes individual sections easier to maintain.

---

## 🖼️ Assets Management

All visual assets should be organized properly.

### Images

Store public static images inside:

`public/images/`

### Fonts

Store custom font files inside:

`src/assets/fonts/`

### Icons

Use Lucide React for interface icons.

Example:

```jsx
import { Menu, Search, Phone, Calendar } from "lucide-react";

function Example() {
  return (
    <div className="flex items-center gap-4">
      <Menu />
      <Search />
      <Phone />
      <Calendar />
    </div>
  );
}

export default Example;
```

### Image Optimization Guidelines

- Prefer WebP or optimized image formats.
- Maintain original aspect ratios.
- Use meaningful file names.
- Avoid unnecessarily large image files.
- Add descriptive alt attributes.
- Use appropriate image sizes for different devices.

---

## 📏 Code Quality Guidelines

To maintain a professional codebase, follow these guidelines:

1. Use reusable React components.
2. Keep components focused on a single responsibility.
3. Use meaningful component and variable names.
4. Store repeated content inside data files.
5. Avoid unnecessary code duplication.
6. Use semantic HTML elements.
7. Maintain consistent formatting.
8. Use responsive Tailwind utilities.
9. Keep generated CSS separate from manually written styles.
10. Avoid hardcoding repeated values throughout the application.

---

## 🚀 Build & Deployment

### Generate Production Tailwind CSS

Before building the production application, compile and minify Tailwind CSS:

```bash
npm run tailwind:build
```

### Generate React Production Build

```bash
npm run build
```

The optimized production files will be generated inside:

```text
build/
```

### Deployment Options

The production build can be deployed to platforms that support static React applications, including:

- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

For deployment, configure the hosting platform to serve the generated `build/` directory.

---

## 🔮 Future Improvements

Potential enhancements for future versions include:

- Online appointment booking system.
- Appointment request form with validation.
- WhatsApp integration.
- Interactive dentist profiles.
- Advanced testimonials carousel.
- Dynamic blog management.
- Newsletter integration.
- SEO optimization.
- Accessibility improvements.
- Performance optimization.
- Analytics integration.

These features may be introduced progressively as the project evolves.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you would like to contribute:

1. Fork this repository.
2. Create a new feature branch.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Commit your changes.

```bash
git add .
git commit -m "Add: your feature description"
```

5. Push your branch.

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request.

Please ensure that your code follows the existing project structure and coding conventions.

---

## 📄 License

This project is developed for educational and portfolio purposes.

Please review the original Figma design's licensing and asset usage permissions before redistributing the design or its associated assets.

---

## 👨‍💻 Author

<p align="center">
  <strong>Abdul Moeez Tariq</strong>
  <br />
  <strong>@moizycodes</strong>
  <br />
  Frontend Developer | React.js Developer
</p>

I am a passionate frontend developer focused on building modern, responsive, and user-friendly web experiences.

I enjoy transforming creative UI/UX designs into functional, accessible, and maintainable web applications using modern frontend technologies.

### Connect With Me

| Platform    | Profile                                                |
| ----------- | ------------------------------------------------------ |
| GitHub      | [@moizycodes](https://github.com/moizycodes)           |
| LinkedIn    | [@moizycodes](https://www.linkedin.com/in/moizy-codes/) |
| Instagram   | [@moizycodes](https://www.instagram.com/moizycodes/)   |
| Facebook    | [@moizycodes](https://www.facebook.com/moizycodes)     |
| X (Twitter) | [@moizycodes](https://x.com/moizycodes)                |
| YouTube     | [@moizycodes](https://www.youtube.com/@moizyvlogs)     |
| TikTok      | [@moizycodes](https://www.tiktok.com/@moizycodes)      |

_Note: Update any social profile URL if your actual public profile uses a different address._

---

<p align="center">
  <strong>Designed with creativity. Developed with passion. Built for better smiles. 🦷</strong>
</p>

<p align="center">
  © 2026 Abdul Moeez Tariq (@moizycodes). All Rights Reserved.
</p>
