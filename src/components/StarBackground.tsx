
import { useEffect, useRef } from 'react';

interface StarBackgroundProps {
  starCount?: number;
}

const StarBackground = ({ starCount = 200 }: StarBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    // Create stars with random positions, sizes, and animation delays
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star animate-star-twinkle';
      
      // Random size (0.5px to 2.5px)
      const size = 0.5 + Math.random() * 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      star.style.opacity = `${0.2 + Math.random() * 0.8}`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      container.appendChild(star);
    }
  }, [starCount]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default StarBackground;
