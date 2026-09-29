import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';
import { Layers, Mail, Lock, User, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('Sojib Ahmed');
  const [email, setEmail] = useState('sojib.ahmed@example.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const { signup } = useAuth();
  const { showToast } = useCourse();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    if (!agreeTerms) {
      showToast('Please agree to the Terms of Service', 'error');
      return;
    }
    signup(name, email, password);
    showToast('🎉 Account created! Welcome to ByteSpace community.', 'success');
    navigate('/');
  };

  const handleSocialSignup = (provider) => {
    signup('Sojib Ahmed', `sojib.${provider.toLowerCase()}@example.com`, 'social123');
    showToast(`Signed up successfully with ${provider}! 🎉`, 'success');
    navigate('/');
  };

  return (
    <div className="auth-page-wrapper">
      {/* Background Blobs */}
      <div className="shape-lime-blob animate-float" style={{ top: '8%', right: '8%' }} />
      <div className="shape-white-ring animate-float" style={{ bottom: '8%', left: '8%', animationDelay: '2s' }} />

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
                <Sparkles size={14} /> Join 50,000+ Engineers
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '10px', color: '#FFFFFF' }}>
                Build Production-Grade Software With Us
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px', fontSize: '0.85rem', color: '#CBD5E1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent)" /> Access to free starter tracks
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent)" /> Exclusive community Discord & pair coding
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent)" /> Verified certificates for LinkedIn
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', gap: '8px', color: '#94A3B8', fontSize: '0.8rem' }}>
              <span>• Free 7-day trial</span>
              <span>• Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="auth-form-content">
          <h2 className="auth-form-title">Create Account</h2>
          <p className="auth-form-sub">Start learning with the top frontend engineering mentors.</p>

          {/* Social Auth */}
          <div className="social-auth-buttons">
            <button type="button" onClick={() => handleSocialSignup('Google')} className="btn-social">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
            </button>
            <button type="button" onClick={() => handleSocialSignup('GitHub')} className="btn-social">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          <div className="auth-divider">or signup with email</div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name-input">Full Name</label>
              <div className="form-input-wrap">
                <User size={18} className="form-input-icon" />
                <input
                  id="name-input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sojib Ahmed"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="signup-email-input">Email Address</label>
              <div className="form-input-wrap">
                <Mail size={18} className="form-input-icon" />
                <input
                  id="signup-email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sojib@example.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="signup-password-input">Password (min. 8 characters)</label>
              <div className="form-input-wrap">
                <Lock size={18} className="form-input-icon" />
                <input
                  id="signup-password-input"
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
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <span>I agree to the Terms of Service and Privacy Policy</span>
              </label>
            </div>

            <button type="submit" className="btn-auth-submit">
              Create ByteSpace Account
            </button>
          </form>

          <p className="auth-bottom-switch">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
