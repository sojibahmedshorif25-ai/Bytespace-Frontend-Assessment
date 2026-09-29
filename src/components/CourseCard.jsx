import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Clock, Bookmark, Check } from 'lucide-react';
import { useCourse } from '../context/CourseContext';

export default function CourseCard({ course }) {
  const { savedCourseIds, toggleSaveCourse, enrolledCourseIds, enrollCourse } = useCourse();
  const navigate = useNavigate();

  const isSaved = savedCourseIds.includes(course.id);
  const isEnrolled = enrolledCourseIds.includes(course.id);

  return (
    <div className="course-card">
      {/* Thumbnail & Badges */}
      <div className="course-thumb-wrap">
        <img src={course.thumbnail} alt={course.title} className="course-thumb" loading="lazy" />
        <span className="course-badge-category">{course.categoryLabel}</span>
        
        <button
          className={`course-bookmark-btn ${isSaved ? 'saved' : ''}`}
          onClick={() => toggleSaveCourse(course.id)}
          title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label="Save Course"
        >
          <Bookmark size={16} fill={isSaved ? '#EF4444' : 'none'} color={isSaved ? '#EF4444' : '#0F172A'} />
        </button>
      </div>

      {/* Card Content */}
      <div className="course-content">
        {/* Rating & Stats */}
        <div className="course-meta-top">
          <div className="course-rating">
            <Star size={15} fill="#F59E0B" stroke="#F59E0B" />
            <span>{course.rating}</span>
            <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>({course.reviewCount})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="course-title">
          <Link to={`/courses/${course.id}`}>{course.title}</Link>
        </h3>

        {/* Instructor */}
        <div className="course-instructor-meta">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="instructor-avatar-sm"
          />
          <div>
            <p className="instructor-name">{course.instructor.name}</p>
            <p className="instructor-role">{course.instructor.role.split('@')[0]}</p>
          </div>
        </div>

        {/* Price & Action */}
        <div className="course-footer">
          <div className="course-price-box">
            <span className="price-current">${course.price}</span>
            {course.originalPrice && (
              <span className="price-original">${course.originalPrice}</span>
            )}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <Link
              to={`/courses/${course.id}`}
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              Details
            </Link>
            
            {isEnrolled ? (
              <button
                className="btn-card-action"
                style={{ background: '#10B981', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '4px' }}
                onClick={() => navigate(`/courses/${course.id}`)}
              >
                <Check size={15} /> Enrolled
              </button>
            ) : (
              <button
                className="btn-card-action"
                onClick={() => enrollCourse(course.id)}
              >
                Enroll
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
