import React, { useRef, useState, useEffect } from 'react';

interface LazyLoadSectionProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  id?: string;
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({ 
  children, 
  rootMargin = '100px', 
  threshold = 0.1,
  id = 'section'
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true); // Once loaded, we keep the content
          console.log(`Section ${id}: now visible`);
        } else {
          console.log(`Section ${id}: now hidden`);
          setIsVisible(false);
        }
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
      className="lazy-section relative"
      style={{ minHeight: hasLoaded ? '0px' : '200px' }} // Only use min-height before content loads
    >
      {/* Always render content once loaded, just hide it */}
      {hasLoaded && (
        <div 
          style={{ 
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {children}
        </div>
      )}
      
      {/* Show placeholder only before first load */}
      {!hasLoaded && (
        <div className="flex items-center justify-center h-48">
          <p className="text-gray-400">Loading content...</p>
        </div>
      )}
    </div>
  );
};

export default LazyLoadSection;