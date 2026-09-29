# ByteSpace - Premier E-Learning & Tech Education Platform

> **Frontend Engineering Assessment for Doin Tech Limited**  
> **Candidate Name:** Sojib Ahmed  
> **Tracking ID:** `2dcdafce-bdd2-45d4-bf41-bdfe88ca5e9f`  
> **Position:** Jr. Software Engineer (Frontend)  
> **Figma Design Reference:** [ByteSpace New Website Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

---

## 🚀 Live Demo & Submission Links
- **GitHub Public Repository:** [https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment](https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment)
- **Live Vercel Deployment:** [https://bytespace-frontend-assessment.vercel.app](https://bytespace-frontend-assessment.vercel.app) *(or your deployed Vercel URL)*

---

## ✨ Features Implemented

### 1. 🌟 Full Landing Page (Required)
- **Pixel-Perfect Hero Section:** Implements the royal blue & electric lime gradient color scheme, animated floating 3D geometry, interactive instant search bar, and social proof stats badges (`50k+ Active Learners`, `4.9 / 5.0 Top Rated Mentorship`).
- **Trust Highlights Bar:** Clean icon-backed proof badges (`500+ Video Courses`, `Industry Certificates`, `1-on-1 Code Reviews`, `Lifetime Access`).
- **Dynamic Category Tabs & Filter System:** Interactive tab selector with live category count filtering across Web Development, UI/UX Design, AI & Data Science, Mobile Apps, and Cloud DevOps.
- **Popular Courses Grid:** Production-grade responsive card grid featuring:
  - Custom category tags and bookmark/wishlist toggles
  - Star rating with live review counters
  - Instructor metadata & avatar
  - Original and discounted pricing badges
  - Interactive "Enroll" trigger with canvas confetti celebration 🎉
- **Interactive Feature Showcases (2 Sections):**
  - *Feature 1:* Code sandboxes and live FAANG mentor feedback.
  - *Feature 2 (Reversed layout):* Real-world portfolio building, AWS/Vercel deployment readiness, and recruiter networking.
- **Limited-Time Scholarship CTA Banner:** High-conversion gradient callout with responsive action buttons.
- **Student Reviews & Testimonials Carousel/Grid:** Highlighting student outcomes with 5-star rating systems.
- **Modern Dark-Themed Footer:** Complete with brand messaging, quick links, newsletter subscription toast feedback, and social media links.

### 2. 🎁 Bonus Pages (Extra Credit)
- **Login Page (`/login`):** Split-screen card layout with Google & GitHub social auth, show/hide password toggle, remember me checkbox, and toast notifications.
- **Signup Page (`/signup`):** Full onboarding form with full name, email, password validation, terms agreement checkbox, and instant authentication context.
- **All Courses Catalog (`/courses`):** Dedicated page with keyword search bar, category filtering, multi-criteria sorting (Price, Rating, Popularity), and zero-state handling.
- **Course Details Page (`/courses/:id`):** Interactive video player preview, learning objectives checklist, multi-module syllabus accordion, meet the instructor card, and sticky enrollment sidebar.
- **404 Not Found Page (`*`):** Glowing error state with direct navigation back to home.

---

## 🛠️ Technology Stack
- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Modular Vanilla CSS with comprehensive CSS custom properties (`--primary`, `--accent`, `--radius`, etc.) matching the Figma tokens
- **Icons:** `lucide-react`
- **Effects:** `canvas-confetti`
- **State Management:** React Context API (`AuthContext`, `CourseContext`) with `localStorage` persistence
- **Linter & Code Quality:** Oxlint

---

## 📁 Project Architecture
```
src/
├── assets/             # Static SVGs and imagery
├── components/         # Modular reusable UI components
│   ├── CategoryPills.jsx
│   ├── CourseCard.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── ScrollToTop.jsx
│   ├── ToastContainer.jsx
│   └── TrustBar.jsx
├── context/            # Global context providers
│   ├── AuthContext.jsx
│   └── CourseContext.jsx
├── data/               # Course catalog & curriculum mock database
│   └── coursesData.js
├── pages/              # Application views & pages
│   ├── CourseDetailPage.jsx
│   ├── CoursesPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── NotFoundPage.jsx
│   └── SignupPage.jsx
├── App.jsx             # Main Router layout
├── index.css           # Design tokens, variables & responsive styling
└── main.jsx            # Application entry point
```

---

## ⚙️ Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone <YOUR_REPO_URL>
   cd "Jr. Software Engineer Frontend Assessment Artifacts"
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

5. **Run code linting:**
   ```bash
   npm run lint
   ```

---

## 🚢 Deployment to Vercel
This project is configured for one-click deployment on [Vercel](https://vercel.com).
If deploying via GitHub:
1. Push your repository to GitHub.
2. Import the repository into Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
