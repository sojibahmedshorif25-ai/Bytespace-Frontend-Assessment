import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="notfound-wrapper">
      <div className="error-code">404</div>
      <h2 className="error-title">Page Not Found</h2>
      <p className="error-desc">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn-primary">
        <Home size={18} />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
