import React from 'react';

export default function Button({ children, className = '', disabled, ...props }) {
  return (
    <button 
      disabled={disabled}
      className={`bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:pointer-events-none text-slate-950 font-bold py-3.5 px-6 rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 flex items-center justify-center ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
