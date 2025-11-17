'use client';

import { motion } from 'framer-motion';
import { ArmorPieceType } from '@/types/coverage';

interface ArmorPieceProps {
  type: ArmorPieceType;
  zIndex: number;
  delay?: number;
}

/**
 * ArmorPiece Component
 * Renders an individual armor piece with entrance animation
 *
 * Animation: Scales up from 0 and fades in with a slight bounce
 */
export default function ArmorPiece({ type, zIndex, delay = 0 }: ArmorPieceProps) {
  // Get color based on armor type
  const getArmorColor = (type: ArmorPieceType): string => {
    const colors: Record<ArmorPieceType, string> = {
      collar: 'bg-yellow-500',
      vest: 'bg-blue-500',
      helmet: 'bg-purple-500',
      'leg-guards': 'bg-green-500',
      shield: 'bg-cyan-400 opacity-50',
      cape: 'bg-red-500',
    };
    return colors[type];
  };

  // Get position and size based on armor type (placeholder positioning)
  const getArmorStyle = (type: ArmorPieceType) => {
    const styles: Record<ArmorPieceType, string> = {
      collar: 'top-[30%] left-[50%] -translate-x-1/2 w-16 h-6 rounded-full',
      vest: 'top-[40%] left-[50%] -translate-x-1/2 w-24 h-32 rounded-lg',
      helmet: 'top-[18%] left-[50%] -translate-x-1/2 w-20 h-16 rounded-t-full',
      'leg-guards': 'top-[60%] left-[50%] -translate-x-1/2 w-28 h-12 rounded',
      shield: 'top-[35%] left-[50%] -translate-x-1/2 w-40 h-40 rounded-full',
      cape: 'top-[35%] left-[50%] -translate-x-1/2 w-32 h-48 rounded-b-full',
    };
    return styles[type];
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        delay,
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      className={`absolute ${getArmorStyle(type)} ${getArmorColor(type)}`}
      style={{ zIndex }}
    >
      {/* Placeholder armor piece - replace with actual SVG/images */}
    </motion.div>
  );
}
