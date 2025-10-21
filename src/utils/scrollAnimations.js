// utils/scrollAnimations.js

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const slideFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const slideFromBottom = {
  initial: { y: 50 },
  animate: { y: 0 },
  exit: { y: 50 },
};

export const flipCard = (delay = 0) => ({
  initial: { rotateY: 90, opacity: 0 },  
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      delay,
      type: 'spring',
      stiffness: 150,
      damping: 12,
      mass: 1,
    },
  },
  exit: { rotateY: 90, opacity: 0 }, 
});

export const bouncyRise = (delay = 0) => ({
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1, 
    transition: {
      delay,
      type: 'spring',
      stiffness: 120,
      damping: 12,
      mass: 1,
    },
  },
  exit: { opacity: 0, y: 50, scale: 0.95 },
});

export const bouncyFall = (delay = 0) => ({
  initial: { opacity: 0, y: -50, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,      
    scale: 1, 
    transition: {
      delay,
      type: 'spring',
      stiffness: 120,
      damping: 12,
      mass: 1,
    },
  },
  exit: { opacity: 0, y: -50, scale: 0.95 },  
});

export const bouncingBall = (delay = 0) => ({
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: [ -50, 20, -10, 0 ], 
    transition: {
      delay,
      duration: 1.2,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
});

export const coinFlip = (delay = 0) => ({
  initial: { opacity: 0, rotateY: 180, scale: 0.8 },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, rotateY: 180, scale: 0.8, transition: { duration: 0.5 } },
});

export const cardToss = (delay = 0) => ({
  initial: { opacity: 0, x: -100, y: -50, rotate: -15, scale: 0.8 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
  exit: { opacity: 0, x: 100, y: 50, rotate: 15, transition: { duration: 0.6 } },
});

export const elegantReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40, rotate: 2 },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], 
    },
  },
  exit: { opacity: 0, y: 40, rotate: -2 },
});

export const waveRise = (index = 0, delayStep = 0.15) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: index * delayStep, 
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
  exit: { opacity: 0, y: 50 },
});

export const tickerFadeInUp = {
  initial: { opacity: 0, y: 40 },   
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
  exit: { opacity: 0, y: 40 },     
};

export const squashStretch = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: [0.8, 1.2, 0.95, 1], 
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
});

export const pivotShakeFadeIn = (delay = 0) => ({
  initial: { opacity: 0, rotate: 0 },
  animate: {
    opacity: 1,
    rotate: [0, -15, 10, -10, 5, 0],
    transition: {
      delay,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0, rotate: 0 },
});

export const bounceInShakeScroll = (delay = 0) => ({
  initial: { opacity: 0, y: 100, scale: 0.95, rotate: 0 },
  animate: {
    opacity: 1,
    y: [100, -10, 5, 0],      
    scale: [0.95, 1.03, 0.98, 1], 
    rotate: [0, 2, -2, 0],    
    transition: {
      delay,
      duration: 0.8,         
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: 100, scale: 0.95, rotate: 0, transition: { duration: 0.5 } },
});

export const dominoFall = (delay = 0) => ({
  initial: { opacity: 0, rotateX: -90, y: -50 },
  animate: {
    opacity: 1,
    rotateX: [ -90, 20, 0 ],   
    y: [ -50, 10, 0 ],
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, rotateX: -90, y: -50, transition: { duration: 0.5 } },
});

export const dropCardMotion = (delay = 0) => ({
  initial: { opacity: 0, y: -30, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: -30, scale: 0.95, transition: { duration: 0.4 } },
});

export const dropPinMotion = (delay = 0) => ({
  initial: { opacity: 0, x: 150, y: -150, scaleX: -1 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scaleX: -1,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 150,
    y: -150,
    transition: { duration: 0.5 },
  },
});