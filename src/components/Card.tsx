import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export default function Card({
  title,
  subtitle,
  children,
  variant = 'default',
  className = '',
}: CardProps) {
  const cardClass = variant === 'accent' ? 'card card-accent' : 'card';

  return (
    <div className={`${cardClass} ${className}`}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
