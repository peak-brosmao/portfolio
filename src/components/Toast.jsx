import React from 'react';
import { Check } from 'lucide-react';

export const Toast = ({ message, show }) => {
  return (
    <div className={`toast-wrap ${show ? 'visible' : ''}`} role="status" aria-live="polite">
      <div className="toast-inner">
        <span className="toast-icon">
          <Check size={12} strokeWidth={3} />
        </span>
        <span>{message}</span>
      </div>
    </div>
  );
};
