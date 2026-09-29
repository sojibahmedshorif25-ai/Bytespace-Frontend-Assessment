import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';
import { 
  Layers, 
  Search, 
  Bookmark, 
  LogOut, 
  Menu, 
  X, 
  BookOpen, 
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { savedCourseIds, enrolledCourseIds, searchQuery, setSearchQuery } = useCourse();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/courses');
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-icon-box">
            <Layers size={22} />
          </div>
          <span>ByteSpace</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Courses
            </NavLink>
          </li>
          <li>
            <a href="#features" className="nav-link">
              Why ByteSpace
            </a>
          </li>
          <li>
            <a href="#mentors" className="nav-link">
              Mentors
            </a>
          </li>
          <li>
            <a href="#reviews" className="nav-link">
              Reviews
            </a>
          </li>
        </ul>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Search Toggle */}
          <div style={{ position: 'relative' }}>
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.88rem',
                    width: '180px',
                    background: '#FFFFFF',
                    color: '#0F172A'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  style={{ color: '#FFFFFF', marginLeft: '6px' }}
                >
                  <X size={16} />
                </button>
              </form>
            ) : (
              <button
                className="nav-search-btn"
                onClick={() => setSearchOpen(true)}
                title="Search courses"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Wishlist Icon */}
          <Link
            to="/courses"
            className="nav-search-btn"
            title="Wishlist"
            style={{ position: 'relative' }}
          >
            <Bookmark size={18} />
            {savedCourseIds.length > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'var(--accent)',
                  color: '#0F172A',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {savedCourseIds.length}
              </span>
            )}
          </Link>

          {/* User Auth or Sign In */}
          {user ? (
            <div style={{ position: 'relative' }}>
              <div
                className="nav-user-badge"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <img src={user.avatar} alt={user.name} className="nav-avatar" />
                <span>{user.name.split(' ')[0]}</span>
                <ChevronDown size={14} />
              </div>

              {userDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    right: 0,
                    width: '220px',
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    boxShadow: 'var(--shadow-xl)',
                    padding: '8px',
                    zIndex: 200,
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-light)' }}>
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>{user.name}</p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{user.email}</p>
                  </div>
                  <Link
                    to="/courses"
                    onClick={() => setUserDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 12px',
                      fontSize: '0.88rem',
                      color: 'var(--text-main)',
                      borderRadius: '8px',
                      fontWeight: 600
                    }}
                  >
                    <BookOpen size={16} color="var(--primary-bright)" />
                    <span>My Enrolled ({enrolledCourseIds.length})</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setUserDropdownOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 12px',
                      fontSize: '0.88rem',
                      color: '#EF4444',
                      borderRadius: '8px',
                      width: '100%',
                      fontWeight: 600,
                      textAlign: 'left'
                    }}
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link to="/login" className="btn-outline-white" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                Log In
              </Link>
              <Link to="/signup" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#1E40AF',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.05rem' }}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.05rem' }}
          >
            Browse All Courses
          </NavLink>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}
          >
            Why ByteSpace
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}
          >
            Student Reviews
          </a>
          {!user && (
            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <Link
                to="/login"
                className="btn-outline-white"
                onClick={() => setMobileMenuOpen(false)}
                style={{ flex: 1, textAlign: 'center' }}
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ flex: 1, textAlign: 'center' }}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
