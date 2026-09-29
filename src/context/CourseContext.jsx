import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { courses as initialCourses } from '../data/coursesData';

const CourseContext = createContext(null);

export const CourseProvider = ({ children }) => {
  const [coursesList] = useState(initialCourses);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [toasts, setToasts] = useState([]);

  const [savedCourseIds, setSavedCourseIds] = useState(() => {
    const saved = localStorage.getItem('bytespace_saved');
    return saved ? JSON.parse(saved) : ['full-stack-web-mastery'];
  });

  const [enrolledCourseIds, setEnrolledCourseIds] = useState(() => {
    const saved = localStorage.getItem('bytespace_enrolled');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bytespace_saved', JSON.stringify(savedCourseIds));
  }, [savedCourseIds]);

  useEffect(() => {
    localStorage.setItem('bytespace_enrolled', JSON.stringify(enrolledCourseIds));
  }, [enrolledCourseIds]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleSaveCourse = (courseId) => {
    if (savedCourseIds.includes(courseId)) {
      setSavedCourseIds((prev) => prev.filter((id) => id !== courseId));
      showToast('Course removed from your wishlist', 'info');
    } else {
      setSavedCourseIds((prev) => [...prev, courseId]);
      showToast('Course added to your wishlist ⭐', 'success');
    }
  };

  const enrollCourse = (courseId) => {
    if (!enrolledCourseIds.includes(courseId)) {
      setEnrolledCourseIds((prev) => [...prev, courseId]);
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      showToast('🎉 Congratulations! You are now enrolled.', 'success');
    } else {
      showToast('You are already enrolled in this course!', 'info');
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses: coursesList,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        savedCourseIds,
        enrolledCourseIds,
        toggleSaveCourse,
        enrollCourse,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
