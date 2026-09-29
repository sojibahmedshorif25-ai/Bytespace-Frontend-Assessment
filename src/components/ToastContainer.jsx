import React from 'react';
import { useCourse } from '../context/CourseContext';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function ToastContainer() {
  const { toasts, removeToast } = useCourse();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          {toast.type === 'success' && <CheckCircle size={18} color="#D4F63D" />}
          {toast.type === 'error' && <AlertCircle size={18} color="#EF4444" />}
          {toast.type === 'info' && <Info size={18} color="#3B82F6" />}
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            style={{ marginLeft: 'auto', color: '#94A3B8', padding: '2px', display: 'flex' }}
            aria-label="Close notification"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
