# ByteSpace — E-Learning Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://bytespace-frontend-assessment-rouge.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

Frontend assessment submission for the **Jr. Software Engineer (Frontend)** position at **Doin Tech Limited**.

- **Candidate:** Sojib Ahmed
- **Tracking ID:** `2dcdafce-bdd2-45d4-bf41-bdfe88ca5e9f`
- **Figma Design:** [ByteSpace Website Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

---

## Quick Links

- **Live Demo:** [https://bytespace-frontend-assessment-rouge.vercel.app](https://bytespace-frontend-assessment-rouge.vercel.app)
- **GitHub Repo:** [https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment](https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment)
- **Pull Request:** [https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment/pulls](https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment/pulls)

---

## Features

### 1. Landing Page (Required)
- **Hero Section:** Built matching the Figma color palette (Royal Blue and Electric Lime), with animated floating shapes, search input, and stats badges (`50k+ Active Learners`, `4.9 / 5.0 Rating`).
- **Trust Bar:** Key platform highlights (500+ courses, certificates, 1-on-1 mentorship, lifetime access).
- **Category Filter Tabs:** Dynamic category tabs with real-time course counts for Web Dev, UI/UX, AI & Data Science, Mobile Apps, and Cloud DevOps.
- **Popular Courses Grid:**
  - Category badges, wishlist bookmarking with live counters.
  - Star ratings, review count, course duration.
  - Instructor details and avatar.
  - Current price and discounted original price.
  - Course enrollment button with confetti celebration.
- **Feature Sections:** Interactive code playground section and career mentorship section with reversed layout.
- **Scholarship CTA Banner:** Highlighting limited-time opportunities with direct links.
- **Testimonials:** Student reviews with 5-star rating cards.
- **Footer:** Category navigation, newsletter subscription with toast feedback, and social links.

### 2. Bonus Pages (Extra Credit)
- **Login & Signup (`/login`, `/signup`):**
  - Form validation with show/hide password toggle.
  - Google and GitHub login options.
  - State management using React Context (`AuthContext`) with `localStorage` persistence.
- **Course Details (`/courses/:id`):**
  - Video preview player.
  - Learning objectives checklist.
  - Expandable syllabus accordion with module lessons.
  - Instructor profile.
  - Sticky enrollment card with 30-day guarantee.
- **Course Catalog (`/courses`):**
  - Search by title, keyword, or instructor.
  - Category filters with live counts.
  - Sorting options (Most Popular, Highest Rated, Price Low to High, Price High to Low).
- **404 Not Found Page:** Custom page for handling invalid routes.

---

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Vanilla CSS with custom properties matching Figma design tokens
- **State Management:** React Context API (`AuthContext`, `CourseContext`)
- **Icons & Effects:** Lucide Icons, Canvas Confetti
- **Deployment:** Vercel (with `vercel.json` SPA rewrite rules)

---

## Project Structure

```
src/
├── assets/             # Static SVGs and icons
├── components/         # Reusable UI components
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
├── data/               # Course catalog mock dataset
│   └── coursesData.js
├── pages/              # Views
│   ├── CourseDetailPage.jsx
│   ├── CoursesPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── NotFoundPage.jsx
│   └── SignupPage.jsx
├── App.jsx             # Routes & layout setup
├── index.css           # Global design system & styles
└── main.jsx            # Entry point
```

---

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sojibahmedshorif25-ai/Bytespace-Frontend-Assessment.git
   cd Bytespace-Frontend-Assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## Author

**Sojib Ahmed**  
- Email: [sojibahmedshorif25@gmail.com](mailto:sojibahmedshorif25@gmail.com)  
- GitHub: [@sojibahmedshorif25-ai](https://github.com/sojibahmedshorif25-ai)
