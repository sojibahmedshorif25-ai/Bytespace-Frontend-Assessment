import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import CourseCard from '../components/CourseCard';
import CategoryPills from '../components/CategoryPills';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';

export default function CoursesPage() {
  const { courses, searchQuery, setSearchQuery, activeCategory } = useCourse();
  const [sortBy, setSortBy] = useState('popular');

  // Filter by category and search query
  let filtered = courses.filter((c) => {
    const matchesCategory = activeCategory === 'all' || c.category === activeCategory;
    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ minHeight: '80vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)', color: '#FFFFFF', padding: '60px 0 50px' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <span className="hero-badge" style={{ background: 'rgba(212, 246, 61, 0.2)', color: 'var(--accent)', borderColor: 'rgba(212, 246, 61, 0.4)' }}>
              Explore Curated Tracks
            </span>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px', color: '#FFFFFF' }}>
              Explore All <span style={{ color: 'var(--accent)' }}>Masterclasses</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
              Hands-on interactive courses designed to equip you with production-grade engineering and design skills.
            </p>

            {/* Search Bar in Header */}
            <div className="hero-search-wrapper" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
              <Search size={20} className="hero-search-icon" />
              <input
                type="text"
                placeholder="Search by topic, keyword, or instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hero-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, paddingRight: '8px' }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: '50px' }}>
        {/* Filter and Sort Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
          <CategoryPills />

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <label htmlFor="sort-select" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <SlidersHorizontal size={16} /> Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-light)',
                background: '#FFFFFF',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: '24px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
          Showing <strong>{filtered.length}</strong> available courses {searchQuery && <span>matching "<em>{searchQuery}</em>"</span>}
        </div>

        {/* Courses Grid */}
        {filtered.length > 0 ? (
          <div className="courses-grid">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-medium)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-subtle)', color: 'var(--primary-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <BookOpen size={30} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>No courses match your criteria</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Try adjusting your search query or choosing another category filter.</p>
            <button
              className="btn-primary"
              onClick={() => {
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
