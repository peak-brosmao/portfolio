import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Toast = ({ message, show }) => {
  return (
    <div className={`toast-notice ${show ? 'show' : ''}`} role="alert">
      <CheckCircle size={18} color="#10b981" />
      <span>{message}</span>
    </div>
  );
};
