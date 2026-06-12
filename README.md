# 🍽️ Ivory Delhi Restaurant - Premium Landing Page

[![GitHub license](https://img.shields.io/github/license/Lalitmukesh69/ivoryy-delhi-restaurant-landing-page?style=for-the-badge&color=314a38)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Lalitmukesh69/ivoryy-delhi-restaurant-landing-page?style=for-the-badge&color=2D3917)](https://github.com/Lalitmukesh69/ivoryy-delhi-restaurant-landing-page/stargazers)
[![React Version](https://img.shields.io/badge/React-v17.0.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node Version](https://img.shields.io/badge/Node-v22-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)

> A modern, elegant, and state-of-the-art landing page for a luxury fine-dining restaurant in Delhi, crafted with React, custom styling, and smooth animations.

---

## 📊 Component Architecture Graph

Below is the layout graph of the React components showing the architecture and hierarchy of the Ivory Delhi page:

```mermaid
graph TD
    %% Styling
    classDef main fill:#314A38,stroke:#E6F4EA,stroke-width:2px,color:#E6F4EA;
    classDef component fill:#2D3917,stroke:#A6A6A6,stroke-width:1px,color:#E6F4EA;
    
    App[App Component]:::main
    Navbar[Navbar]:::component
    Header[Header / Hero]:::component
    AboutUs[About Us]:::component
    SpecialMenu[Special Menu]:::component
    Chef[Chef Section]:::component
    Intro[Video Intro]:::component
    Laurels[Awards / Laurels]:::component
    Gallery[Photo Gallery]:::component
    FindUs[Find Us / Contact]:::component
    Footer[Footer]:::component
    
    App --> Navbar
    App --> Header
    App --> AboutUs
    App --> SpecialMenu
    App --> Chef
    App --> Intro
    App --> Laurels
    App --> Gallery
    App --> FindUs
    App --> Footer

    SpecialMenu --> MenuItem[MenuItem]:::component
    Footer --> FooterOverlay[FooterOverlay]:::component
    Footer --> Newsletter[Newsletter]:::component
    Navbar --> BookingForm[BookingForm]:::component
```

---

## 🌟 Visual Showcase

Here is a preview of the premium hero section of the Ivory Delhi landing page:

![Ivory Delhi Hero Section Screenshot](src/assets/hero_screenshot.png)

---

## ✨ Key Features

- **Luxury Design System:** Custom tailored typography using Cormorant Upright & Open Sans, smooth HSL-based forest green and gold theme.
- **Interactive Reservation:** Responsive design focusing on booking tables and exploring menus.
- **Modern UI/UX Patterns:** Developed using components following the BEM (Block, Element, Modifier) CSS architecture.
- **Fully Responsive:** Beautifully crafted layouts that scale seamlessly from 4K monitors down to mobile screens.
- **Performance & SEO:** Fast page loads, semantic HTML5 structure, and search engine optimized.

---

## 🛠️ Technology Stack

- **Framework:** React.js
- **Styling:** Vanilla CSS (BEM Architecture)
- **Icons:** React Icons (`react-icons`)
- **Server Options:** Cross-platform startup settings utilizing `cross-env` with OpenSSL support.

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (recommended version 18 or higher).

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Run the Development Server
Start the local server:
```bash
npm start
```
Open [http://localhost:3007](http://localhost:3007) in your browser to view the application.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

---

## 📄 License
Open source and available under the [MIT License](LICENSE).
