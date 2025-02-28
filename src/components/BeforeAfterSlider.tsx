import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    
    let clientX: number;
    
    if ('touches' in e) {
      // Touch event
      clientX = e.touches[0].clientX;
    } else {
      // Mouse event
      clientX = e.clientX;
    }
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-[400px] overflow-hidden rounded-lg ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image (Full width) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${beforeImage})` }}
      >
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>
      
      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${afterImage})`,
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      >
        {/* After Label */}
        <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {afterLabel}
        </div>
      </div>
      
      {/* Slider Control */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <motion.div 
            animate={{ rotate: isDragging.current ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8l4 4-4 4M7 8l-4 4 4 4" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;