import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';
import { Layers, Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('sojib.ahmed@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const { login } = useAuth();
  const { showToast } = useCourse();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please enter both email and password', 'error');
      return;
    }
    login(email, password);
    showToast('Welcome back to ByteSpace! 👋', 'success');
    navigate('/');
  };

  const handleSocialLogin = (provider) => {
    login(`demo.user@${provider.toLowerCase()}.com`, 'social123');
    showToast(`Signed in successfully with ${provider}! 🎉`, 'success');
    navigate('/');
  };

  return (
    <div className="auth-page-wrapper">
      {/* Background Blobs */}
      <div className="shape-lime-blob animate-float" style={{ top: '5%', left: '5%' }} />
      <div className="shape-white-ring animate-float" style={{ bottom: '10%', right: '5%', animationDelay: '1.5s' }} />

      <div className="auth-container-card">
        {/* Left Side: Dark Brand Promo */}
        <div className="auth-sidebar-banner">
          <div>
            <Link to="/" className="auth-brand-logo">
              <div className="brand-icon-box">
                <Layers size={22} />
              </div>
              <span>ByteSpace</span>
            </Link>

            <div className="auth-preview-card">
              <span className="hero-badge" style={{ background: 'rgba(212, 246, 61, 0.15)', color: 'var(--accent)', borderColor: 'rgba(212, 246, 61, 0.3)' }}>
                <Sparkles size={14} /> Student Spotlight
              </span>
              <p style={{ fontSize: '0.92rem', color: '#E2E8F0', marginTop: '10px', fontStyle: 'italic', lineHeight: 1.6 }}>
                "ByteSpace taught me how to write scalable React apps and ace technical interviews. Landed my Jr. Frontend role right away!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Student"
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>Sojib Ahmed</h5>
                  <p style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Junior Frontend Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', gap: '8px', color: '#94A3B8', fontSize: '0.8rem' }}>
              <span>• Over 500+ Verified Courses</span>
              <span>• Lifetime Access</span>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="auth-form-content">
          <h2 className="auth-form-title">Welcome Back</h2>
          <p className="auth-form-sub">Sign in to continue your ByteSpace learning journey.</p>

          {/* Social Auth */}
          <div className="social-auth-buttons">
            <button type="button" onClick={() => handleSocialLogin('Google')} className="btn-social">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
            </button>
            <button type="button" onClick={() => handleSocialLogin('GitHub')} className="btn-social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          <div className="auth-divider">or with email</div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email-input">Email Address</label>
              <div className="form-input-wrap">
                <Mail size={18} className="form-input-icon" />
                <input
                  id="email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password-input">Password</label>
              <div className="form-input-wrap">
                <Lock size={18} className="form-input-icon" />
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="form-input"
                  style={{ paddingRight: '40px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="auth-options">
              <label className="checkbox-wrap">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); showToast('Password reset link sent to email!', 'info'); }} style={{ color: 'var(--primary-bright)', fontWeight: 600 }}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-auth-submit">
              Sign In to ByteSpace
            </button>
          </form>

          <p className="auth-bottom-switch">
            Don't have an account yet? <Link to="/signup">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
