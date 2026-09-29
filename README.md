# ByteSpace — Modern E-Learning Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://bytespace-frontend-assessment-rouge.vercel.app)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Clean Code](https://img.shields.io/badge/Code_Quality-Standardized-10B981?style=for-the-badge&logo=oxc&logoColor=white)](https://oxc.rs)

> **Frontend Engineering Assessment Project for Doin Tech Limited**  
> **Candidate:** Sojib Ahmed  
> **Position:** Jr. Software Engineer (Frontend)  
> **Tracking ID:** `2dcdafce-bdd2-45d4-bf41-bdfe88ca5e9f`  
> **Figma Reference:** [ByteSpace Website Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

---

## 🔗 Quick Links

- 🌐 **Live Website:** [https://bytespace-frontend-assessment-rouge.vercel.app](https://bytespace-frontend-assessment-rouge.vercel.app)
- 💻 **GitHub Repository:** [https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment](https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment)
- 🔀 **Pull Request:** [https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment/pulls](https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment/pulls)

---

## 📖 Project Overview

**ByteSpace** is a high-performance, accessible e-learning web platform crafted to deliver an engaging online course experience. The application faithfully translates the Figma design into a responsive, component-driven React architecture while implementing practical frontend features including state persistence, category filtering, search, curriculum accordions, and custom micro-interactions.

---

## 🌟 Core Features & Implementation

### 1. 🎯 Landing Page (Required)
- **Hero Experience:** Royal Blue (`#1E40AF`) & Electric Lime (`#D4F63D`) branded color palette with subtle 3D floating shape animations, real-time keyword search, and floating stats badges (`50k+ Learners`, `4.9 Top Rated`).
- **Trust & Credibility Bar:** Responsive badges highlighting verified course counts, accredited certifications, and mentor review offerings.
- **Dynamic Category Filtering:** Interactive pill tabs enabling smooth real-time filtering across Web Development, UI/UX Design, AI & Data Science, Mobile Apps, and Cloud DevOps.
- **Featured Course Grid:** 
  - Visual category badges and wishlist bookmark toggling with live badge counters.
  - Transparent pricing breakdowns with original vs. discounted prices.
  - Instructor metadata & avatar preview.
  - Interactive **Enroll** flow featuring confetti celebration feedback.
- **Dual Interactive Feature Showcases:**
  - *Feature 1:* In-browser interactive coding playground highlight with live linting.
  - *Feature 2 (Reversed Grid):* Capstone portfolio building, production cloud deployment readiness, and recruiter networking.
- **Limited-Time Scholarship Banner:** High-conversion gradient callout with responsive CTA triggers.
- **Student Testimonials:** Verified 5-star student review cards with responsive layout.
- **Rich Footer:** Complete with newsletter subscription toast feedback, categorical navigation, and social links.

### 2. 🚀 Bonus Features (Extra Credit)
- **Authentication Pages (`/login` & `/signup`):**
  - Responsive split-card layouts with branded visual sidebar.
  - Google and GitHub social auth integration.
  - Form validations, password show/hide visibility toggle, and "Remember me" options.
  - Global `AuthContext` state management with `localStorage` persistence.
- **Course Details View (`/courses/:id`):**
  - Embedded video preview player.
  - "What You'll Learn" key objective checklists.
  - Expandable/collapsible multi-module curriculum syllabus accordion.
  - Instructor profile with rating history.
  - Sticky sidebar with discount counter, 30-day money-back guarantee, and instant enrollment.
- **Full Course Catalog (`/courses`):**
  - Keyword search with real-time query matching.
  - Multi-criteria sorting (Popularity, Highest Rated, Price Low-to-High, Price High-to-Low).
  - Clean zero-state fallback with a one-click filter reset.
- **Custom 404 Page:**
  - Distinct gradient error view with quick return navigation.

---

## 🛠️ Tech Stack & Tooling

| Category | Technology |
|---|---|
| **Frontend Framework** | React 19 + Vite 8 |
| **Routing** | React Router v7 (`react-router-dom`) |
| **Styling** | Vanilla CSS (Custom Properties, BEM-inspired naming, Flexbox & CSS Grid) |
| **State Management** | React Context API (`AuthContext`, `CourseContext`) |
| **Data Persistence** | Browser `localStorage` |
| **Icons & Micro-Interactions** | Lucide Icons, Canvas Confetti |
| **Linting & Code Quality** | Oxlint |
| **Deployment** | Vercel (with `vercel.json` SPA rewrite rules) |

---

## 📂 Project Architecture

```
src/
├── assets/             # Static SVGs and branding icons
├── components/         # Reusable modular UI components
│   ├── CategoryPills.jsx     # Category tabs & badge pills
│   ├── CourseCard.jsx        # Standardized course card
│   ├── Footer.jsx            # Dark footer & newsletter
│   ├── HeroSection.jsx       # Hero with floating elements & search
│   ├── Navbar.jsx            # Sticky navigation with auth badge
│   ├── ScrollToTop.jsx       # Route transition scroll reset
│   ├── ToastContainer.jsx    # Custom toast notification system
│   └── TrustBar.jsx          # Feature trust metrics
├── context/            # Application state management
│   ├── AuthContext.jsx       # Authentication state & actions
│   └── CourseContext.jsx     # Cart, wishlist, filters, & toasts
├── data/               # Course catalog mock database
│   └── coursesData.js
├── pages/              # Routed view containers
│   ├── CourseDetailPage.jsx  # Detailed syllabus & player
│   ├── CoursesPage.jsx       # Full searchable catalog
│   ├── HomePage.jsx          # Main landing page
│   ├── LoginPage.jsx         # Sign in view
│   ├── NotFoundPage.jsx      # 404 handler
│   └── SignupPage.jsx        # Registration view
├── App.jsx             # Root layout & route configuration
├── index.css           # Global tokens, typography & responsive rules
└── main.jsx            # React root mount point
```

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment.git
   cd Bytespace-Frontend-Assessment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Lint check:**
   ```bash
   npm run lint
   ```

---

## 👨‍💻 Author

**Sojib Ahmed**  
- **Email:** [sojibahmedshorif25@gmail.com](mailto:sojibahmedshorif25@gmail.com)  
- **GitHub:** [@sojibahmedshorif25-ai](https://github.com/sojibahmedshorif25-ai)
