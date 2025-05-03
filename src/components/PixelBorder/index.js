import React from 'react';
import './styles.css';

export default function PixelBorder({ children, className = '' }) {
  return (
    <div className={`pixel-border ${className}`}>
      <div className="left-border" />
      <div className="right-border" />
      <div className="content">
        {children}
      </div>
    </div>
  );
} 