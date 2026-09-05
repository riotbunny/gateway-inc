import React from 'react';

export default function Button({ children, className = '', disabled, ...props }) {
  return (
    <button 
      disabled={disabled}
      className={`bg-white hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none text-black font-bold py-3.5 px-6 rounded-md transition-all active:scale-95 flex items-center justify-center uppercase tracking-widest text-sm ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
