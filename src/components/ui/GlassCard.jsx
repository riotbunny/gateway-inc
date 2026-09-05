import React from 'react';

export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
