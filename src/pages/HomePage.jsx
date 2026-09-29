import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import CategoryPills, { CategoryQuickBadges } from '../components/CategoryPills';
import CourseCard from '../components/CourseCard';
import { useCourse } from '../context/CourseContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Users, 
  Zap, 
  Star,
  Terminal
} from 'lucide-react';
import { testimonials } from '../data/coursesData';

export default function HomePage() {
  const { courses, activeCategory } = useCourse();

  // Filter courses based on active category
  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Popular Courses Section */}
      <section className="container" style={{ padding: '80px 24px 60px' }}>
        <div className="section-header">
          <span className="section-tag">Explore Top Programs</span>
          <h2 className="section-title">Most Popular Courses</h2>
          <p className="section-desc">
            Learn from industry practitioners with real-world curriculum designed to get you hired.
          </p>
        </div>

        {/* Category Tabs */}
        <CategoryPills />

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <Link to="/courses" className="btn-blue">
            <span>Explore All 500+ Courses</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Category Quick Badges */}
        <div style={{ marginTop: '60px', borderTop: '1px solid var(--border-light)', paddingTop: '40px' }}>
          <p style={{ textAlign: 'center', fontWeight: 700, color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            Popular Tracks in High Demand
          </p>
          <CategoryQuickBadges />
        </div>
      </section>

      {/* 4. Feature Showcase 1: Interactive Learning */}
      <section id="features" className="feature-showcase-section">
        <div className="container">
          <div className="showcase-grid">
            {/* Visual */}
            <div className="showcase-visual">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                alt="Collaborative Learning"
                className="showcase-main-img"
              />
              <div className="showcase-floating-badge badge-top-left animate-float">
                <div className="floating-icon lime" style={{ width: '36px', height: '36px' }}>
                  <Terminal size={18} />
                </div>
                <div>
                  <h5 style={{ fontWeight: 800, fontSize: '0.92rem' }}>Live Code Sandboxes</h5>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>Browser-based execution</p>
                </div>
              </div>
              <div className="showcase-floating-badge badge-bottom-right animate-float" style={{ animationDelay: '2s' }}>
                <div className="floating-icon blue" style={{ width: '36px', height: '36px' }}>
                  <Users size={18} />
                </div>
                <div>
                  <h5 style={{ fontWeight: 800, fontSize: '0.92rem' }}>1-on-1 Code Reviews</h5>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>Senior Tech Leads</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="showcase-content">
              <span className="section-tag">Interactive Environment</span>
              <h2>Learn by Writing Real Code, Not Just Watching Videos</h2>
              <p>
                ByteSpace offers an integrated coding playground with step-by-step guidance, automated test suites, and instant mentor feedback to ensure you gain practical muscle memory.
              </p>
              
              <ul className="feature-checklist">
                <li className="feature-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Instant browser-based IDE with auto-linting & automated checks</span>
                </li>
                <li className="feature-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Weekly live Q&A sessions with engineers from FAANG & unicorns</span>
                </li>
                <li className="feature-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Real-time code pairing and asynchronous line-by-line feedback</span>
                </li>
              </ul>

              <Link to="/signup" className="btn-primary">
                <span>Start Learning Free</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner Section */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-card">
            <div className="shape-lime-blob" style={{ top: '-40px', right: '-40px', opacity: 0.3 }} />
            <div className="shape-white-ring" style={{ bottom: '-30px', left: '-30px', opacity: 0.2 }} />
            
            <span className="hero-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              <Zap size={14} fill="#D4F63D" color="#D4F63D" />
              <span>Limited Time Scholarship Available</span>
            </span>

            <h2 className="cta-title">Ready to Accelerate Your Tech Career?</h2>
            <p className="cta-subtitle">
              Join over 50,000 engineers and designers building next-gen web applications, AI tools, and enterprise cloud solutions.
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/signup" className="btn-primary" style={{ padding: '14px 32px', fontSize: '1.05rem' }}>
                Get Full Access Today
              </Link>
              <Link to="/courses" className="btn-outline-white" style={{ padding: '14px 32px', fontSize: '1.05rem' }}>
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Feature Showcase 2: Career Readiness (Reversed layout) */}
      <section id="mentors" className="feature-showcase-section" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="showcase-grid reverse">
            {/* Visual */}
            <div className="showcase-visual">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80"
                alt="Career Mentorship"
                className="showcase-main-img"
              />
              <div className="showcase-floating-badge badge-top-left animate-float">
                <div className="floating-icon lime" style={{ width: '36px', height: '36px' }}>
                  <Award size={18} />
                </div>
                <div>
                  <h5 style={{ fontWeight: 800, fontSize: '0.92rem' }}>Verified Certificates</h5>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>Add directly to LinkedIn</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="showcase-content">
              <span className="section-tag">Career Acceleration</span>
              <h2>Build a Standout Portfolio That Demands Recruiter Attention</h2>
              <p>
                Every track culminates in full-scale capstone projects deployed to live production servers. Graduate with a production portfolio, GitHub commit history, and resume reviews.
              </p>
              
              <ul className="feature-checklist">
                <li className="feature-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Deploy production apps to Vercel, AWS, and Cloudflare Pages</span>
                </li>
                <li className="feature-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Resume and LinkedIn optimization with senior tech recruiters</span>
                </li>
                <li className="feature-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Direct referrals to partner tech startups and software agencies</span>
                </li>
              </ul>

              <Link to="/courses" className="btn-blue">
                <span>View Program Syllabus</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section id="reviews" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Student Stories</span>
            <h2 className="section-title">Loved by 50,000+ Students Worldwide</h2>
            <p className="section-desc">
              Discover how our learners transitioned from beginners to junior and mid-level software engineers.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{item.quote}"</p>
                </div>

                <div className="testimonial-author">
                  <img src={item.avatar} alt={item.name} className="author-avatar" />
                  <div>
                    <h4 className="author-name">{item.name}</h4>
                    <p className="author-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
