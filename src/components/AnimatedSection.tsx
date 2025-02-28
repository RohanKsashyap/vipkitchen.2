import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  },
  down: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  },
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;