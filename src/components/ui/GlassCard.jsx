import React from 'react';

export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
