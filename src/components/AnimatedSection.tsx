import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  showBlueprint?: boolean;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = '',
  showBlueprint = true,
  id,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${className} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ background: 'var(--bg-soft)' }}
    >
      {showBlueprint && <div className="blueprint-grid"></div>}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </section>
  );
}
