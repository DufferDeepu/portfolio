'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

export interface LeetCodeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface LeetCodeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const bodyVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    scale: [0.9, 1],
    transition: {
      duration: 0.4,
    },
  },
};

const tailVariants: Variants = {
  normal: {
    pathLength: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  draw: {
    pathLength: [0, 1],
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  wag: {
    pathLength: 1,
    rotate: [0, -15, 15, -10, 10, -5, 5],
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const LeetCodeIcon = forwardRef<LeetCodeIconHandle, LeetCodeIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const bodyControls = useAnimation();
    const tailControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: async () => {
          bodyControls.start('animate');
          await tailControls.start('draw');
          tailControls.start('wag');
        },
        stopAnimation: () => {
          bodyControls.start('normal');
          tailControls.start('normal');
        },
      };
    });

    const handleMouseEnter = useCallback(
      async (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          bodyControls.start('animate');
          await tailControls.start('draw');
          tailControls.start('wag');
        } else {
          onMouseEnter?.(e);
        }
      },
      [bodyControls, onMouseEnter, tailControls]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          bodyControls.start('normal');
          tailControls.start('normal');
        } else {
          onMouseLeave?.(e);
        }
      },
      [bodyControls, tailControls, onMouseLeave]
    );

    return (
      <div
        className={twMerge(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Body path (LeetCode logo outline) */}
          <motion.path
            variants={bodyVariants}
            initial="normal"
            animate={bodyControls}
            d="M16.9,17.45 13.4,20.9a2.86,2.86,0,0,1-4.05,0L4.3,15.85a2.86,2.86,0,0,1,0-4.05L9.35,6.7a2.86,2.86,0,0,1,4.05,0L17.25,10.5"
          />

          {/* Tail path 1 (top line pointing up-right) */}
          <motion.path
            variants={tailVariants}
            initial="normal"
            animate={tailControls}
            d="M9.35,6.7 13.8,2.25"
          />

          {/* Tail path 2 (horizontal line) */}
          <motion.path
            variants={bodyVariants}
            initial="normal"
            animate={bodyControls}
            d="M9.8,13.8h8.6"
          />
        </svg>
      </div>
    );
  }
);

LeetCodeIcon.displayName = 'LeetCodeIcon';

export { LeetCodeIcon };