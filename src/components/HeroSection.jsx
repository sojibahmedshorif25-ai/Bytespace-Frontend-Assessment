import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, Users, Award } from 'lucide-react';
import { useCourse } from '../context/CourseContext';

export default function HeroSection() {
  const { searchQuery, setSearchQuery } = useCourse();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setSearchQuery(localQuery);
      navigate('/courses');
    }
  };

  return (
    <section className="hero-section">
      {/* Decorative Floating Shapes */}
      <div className="hero-shapes">
        <div className="shape-lime-blob animate-float" />
        <div className="shape-white-ring animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="shape-lime-cone animate-float" style={{ animationDelay: '3s' }} />
        <div className="shape-white-cube animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Text Header */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>Over 500+ Verified Masterclasses</span>
          </div>

          <h1 className="hero-title">
            Get Access to <span>Hundreds</span> of Online Courses Available
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '640px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            Level up your career with industry-tailored tracks in Web Development, UI/UX Design, AI Engineering, and Cloud DevOps taught by elite mentors.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="hero-search-wrapper">
            <Search size={22} className="hero-search-icon" />
            <input
              type="text"
              placeholder="Search your favorite course, tech, or mentor..."
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="hero-search-input"
            />
            <button type="submit" className="hero-search-btn">
              <span>Search</span>
            </button>
          </form>
        </div>

        {/* Hero Visual Image with Floating Interactive Cards */}
        <div className="hero-visual-container">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80"
              alt="ByteSpace Student Learning"
              className="hero-main-img"
            />

            {/* Floating Card Top Left */}
            <div className="hero-floating-card card-top-left">
              <div className="floating-icon lime">
                <Users size={22} />
              </div>
              <div className="floating-text">
                <h4>50k+</h4>
                <p>Active Learners Worldwide</p>
              </div>
            </div>

            {/* Floating Card Bottom Right */}
            <div className="hero-floating-card card-bottom-right">
              <div className="floating-icon blue">
                <Award size={22} />
              </div>
              <div className="floating-text">
                <h4>4.9 / 5.0</h4>
                <p>Top Rated Mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
