// Animation utility functions
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

// Smooth scroll function
export const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Add hover effect class
export const addHoverEffect = (event: React.MouseEvent<HTMLElement>) => {
  const element = event.currentTarget;
  element.classList.add('hover-effect');
};

// Remove hover effect class
export const removeHoverEffect = (event: React.MouseEvent<HTMLElement>) => {
  const element = event.currentTarget;
  element.classList.remove('hover-effect');
};

// Generate a random delay for staggered animations
export const randomDelay = (min: number = 0.1, max: number = 0.5): number => {
  return Math.random() * (max - min) + min;
};

// For background grid pattern
export const generateGridPattern = (): string => {
  return `
    radial-gradient(circle, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
  `;
};

export const initializeBackgroundEffects = () => {
  const elements = document.querySelectorAll('.bg-grid-pattern');
  elements.forEach(element => {
    if (element instanceof HTMLElement) {
      element.style.backgroundImage = generateGridPattern();
      element.style.backgroundSize = '24px 24px';
    }
  });
};

export const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};