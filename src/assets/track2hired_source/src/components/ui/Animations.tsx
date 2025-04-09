import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

// Export animation variants for use in components
export const animations = {
  fadeIn,
  slideUp,
  slideRight,
  slideLeft,
  staggerContainer,
  scaleUp
};

// Scroll animation component
export const ScrollAnimation: React.FC<{
  children: React.ReactNode;
  variant?: keyof typeof animations;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ 
  children, 
  variant = 'fadeIn', 
  delay = 0, 
  duration = 0.5, 
  className = '' 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations[variant]}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover animation component
export const HoverAnimation: React.FC<{
  children: React.ReactNode;
  scale?: number;
  className?: string;
}> = ({ 
  children, 
  scale = 1.05, 
  className = '' 
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger animation container
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}> = ({ 
  children, 
  delay = 0, 
  staggerDelay = 0.1, 
  className = '' 
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger item
export const StaggerItem: React.FC<{
  children: React.ReactNode;
  variant?: keyof typeof animations;
  className?: string;
}> = ({ 
  children, 
  variant = 'slideUp', 
  className = '' 
}) => {
  return (
    <motion.div
      variants={animations[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};
