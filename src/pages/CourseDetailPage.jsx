import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/coursesData';
import { useCourse } from '../context/CourseContext';
import { 
  Star, 
  Clock, 
  Users, 
  CheckCircle2, 
  Play, 
  Bookmark, 
  Share2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Globe, 
  FileText,
  Check,
  Award
} from 'lucide-react';

export default function CourseDetailPage() {
  const { id } = useParams();
  const { savedCourseIds, toggleSaveCourse, enrolledCourseIds, enrollCourse, showToast } = useCourse();
  const [openAccordions, setOpenAccordions] = useState([0]); // first open by default
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const course = courses.find((c) => c.id === id) || courses[0];
  const isSaved = savedCourseIds.includes(course.id);
  const isEnrolled = enrolledCourseIds.includes(course.id);

  const toggleAccordion = (idx) => {
    setOpenAccordions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Course link copied to clipboard! 📋', 'info');
    }
  };

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Course Detail Hero */}
      <section className="course-detail-hero">
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span className="hero-badge" style={{ margin: 0 }}>
                {course.badge || 'Verified'}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                {course.categoryLabel}
              </span>
            </div>

            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px', color: '#FFFFFF' }}>
              {course.title}
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '24px' }}>
              {course.description}
            </p>

            {/* Quick Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F59E0B', fontWeight: 700 }}>
                <Star size={18} fill="#F59E0B" />
                <span>{course.rating}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>({course.reviewCount} ratings)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Users size={16} color="var(--accent)" />
                <span>{course.studentsCount} Students</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} color="var(--accent)" />
                <span>{course.duration} on-demand video</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={16} color="var(--accent)" />
                <span>English (Subtitles included)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout: 2 Columns */}
      <div className="container" style={{ marginTop: '-40px' }}>
        <div className="course-detail-layout">
          {/* Main Info Column */}
          <div className="course-detail-main">
            {/* Video Preview */}
            <div className="video-player-preview">
              {isPlayingVideo ? (
                <video
                  src={course.videoPreview}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                  />
                  <button
                    className="video-play-btn"
                    onClick={() => setIsPlayingVideo(true)}
                    aria-label="Play course preview"
                  >
                    <Play size={28} fill="#0F172A" />
                  </button>
                  <span style={{ position: 'absolute', bottom: '16px', color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem', background: 'rgba(0,0,0,0.6)', padding: '4px 14px', borderRadius: '9999px' }}>
                    Preview this course
                  </span>
                </div>
              )}
            </div>

            {/* What you'll learn */}
            <div style={{ background: 'var(--primary-subtle)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '36px', border: '1px solid var(--border-blue)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px', color: 'var(--primary-dark)' }}>
                What you'll learn in this course
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                {course.whatYouWillLearn.map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={18} color="var(--primary-bright)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Accordion */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Course Content & Syllabus</h3>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {course.curriculum.length} modules • {course.lessonsCount} lessons • {course.duration}
                </span>
              </div>

              {course.curriculum.map((mod, mIdx) => {
                const isOpen = openAccordions.includes(mIdx);
                return (
                  <div key={mIdx} className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion(mIdx)}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        <span>{mod.title}</span>
                      </div>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{mod.duration}</span>
                    </div>

                    {isOpen && (
                      <div className="accordion-body">
                        {mod.lessons.map((lesson, lIdx) => (
                          <div key={lIdx} className="lesson-row">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <Play size={14} color="var(--primary-bright)" />
                              <span>{lesson.title}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              {lesson.isPreview && (
                                <span style={{ fontSize: '0.75rem', color: 'var(--primary-bright)', fontWeight: 700, background: 'var(--primary-subtle)', padding: '2px 8px', borderRadius: '4px' }}>
                                  Preview
                                </span>
                              )}
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Instructor Bio */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '32px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '20px' }}>Meet Your Instructor</h3>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>{course.instructor.name}</h4>
                  <p style={{ color: 'var(--primary-bright)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '8px' }}>
                    {course.instructor.role}
                  </p>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                    {course.instructor.bio}
                  </p>
                  <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600 }}>
                    <span>⭐ {course.instructor.rating} Instructor Rating</span>
                    <span>🎓 {course.instructor.coursesCount} Courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="course-sticky-sidebar">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
                ${course.price}
              </span>
              {course.originalPrice && (
                <span style={{ fontSize: '1.2rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                  ${course.originalPrice}
                </span>
              )}
              <span style={{ marginLeft: 'auto', background: 'var(--accent)', color: '#0F172A', fontWeight: 800, fontSize: '0.78rem', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>
                62% OFF
              </span>
            </div>

            {/* Action Buttons */}
            {isEnrolled ? (
              <div style={{ background: '#10B981', color: '#FFFFFF', padding: '14px', borderRadius: 'var(--radius-full)', textAlign: 'center', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Check size={20} /> You are Enrolled!
              </div>
            ) : (
              <button
                className="btn-auth-submit"
                onClick={() => enrollCourse(course.id)}
                style={{ width: '100%', marginBottom: '12px' }}
              >
                Enroll Now • Lifetime Access
              </button>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
              <button
                onClick={() => toggleSaveCourse(course.id)}
                className="btn-secondary"
                style={{ padding: '10px 14px', fontSize: '0.88rem' }}
              >
                <Bookmark size={16} fill={isSaved ? '#EF4444' : 'none'} color={isSaved ? '#EF4444' : 'currentColor'} />
                <span>{isSaved ? 'Saved' : 'Wishlist'}</span>
              </button>
              <button
                onClick={handleShare}
                className="btn-secondary"
                style={{ padding: '10px 14px', fontSize: '0.88rem' }}
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>

            {/* Guarantees Checklist */}
            <p style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '12px', color: 'var(--text-main)' }}>
              This course includes:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="var(--primary-bright)" />
                <span>{course.duration} on-demand video</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} color="var(--primary-bright)" />
                <span>Downloadable resources & exercise files</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--primary-bright)" />
                <span>Access on mobile and desktop</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={16} color="var(--primary-bright)" />
                <span>Certificate of completion</span>
              </li>
            </ul>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)', textAlign: 'center' }}>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                30-Day Money-Back Guarantee • No questions asked
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
