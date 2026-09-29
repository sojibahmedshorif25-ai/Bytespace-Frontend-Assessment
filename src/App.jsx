import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CourseProvider>
          <ScrollToTop />
          <ToastContainer />
          
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:id" element={<CourseDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </CourseProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
