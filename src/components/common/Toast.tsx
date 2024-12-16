import React from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          icon: <CheckCircle className="w-5 h-5 text-green-500" />
        };
      case 'error':
        return {
          bg: 'bg-red-100',
          text: 'text-red-800',
          icon: <AlertCircle className="w-5 h-5 text-red-500" />
        };
      default:
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-800',
          icon: <Info className="w-5 h-5 text-blue-500" />
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div className={`fixed bottom-4 right-4 ${styles.bg} ${styles.text} p-4 rounded-lg shadow-lg flex items-center space-x-3`}>
      {styles.icon}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};