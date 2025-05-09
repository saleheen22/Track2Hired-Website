import React, { useRef, useState, useEffect } from 'react';

interface LazyLoadSectionProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  id?: string; // For debugging
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({ 
  children, 
  rootMargin = '120px', // Reduced from 200px
  threshold = 0.1,
  id = 'section'
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on intersection
        const newIsVisible = entry.isIntersecting;
        console.log(`Section ${id}: visibility changed to ${newIsVisible}`);
        setIsVisible(newIsVisible);
      },
      { rootMargin, threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [rootMargin, threshold, id]);

  return (
    <div 
      ref={ref} 
      className="lazy-section" 
      data-visible={isVisible} 
      style={{ minHeight: '100px' }} // Important: Give the ref some height before content loads
    >
      {isVisible ? children : 
        <div className="flex items-center justify-center h-32">
          <p className="text-gray-400">Scrolling will load content...</p>
        </div>
      }
    </div>
  );
};

export default LazyLoadSection;