'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArmorLevel, WellnessTier } from '@/types/quoteForm';

interface QuoteArmorProps {
  type: 'body' | 'shield' | 'helmet';
  level: ArmorLevel;
  delay?: number;
}

/**
 * QuoteArmor Component
 * Renders armor pieces that upgrade based on quote form parameters
 * Each piece has multiple levels: none, basic, standard, premium
 */
export default function QuoteArmor({ type, level, delay = 0 }: QuoteArmorProps) {
  if (level === 'none') return null;

  // Get styling based on armor type and level
  const getArmorConfig = () => {
    const configs = {
      body: {
        basic: {
          className: 'top-[42%] left-[50%] -translate-x-1/2 w-20 h-28 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600',
          label: 'Light Vest ($5k)',
        },
        standard: {
          className: 'top-[40%] left-[50%] -translate-x-1/2 w-24 h-32 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 border-2 border-blue-300',
          label: 'Standard Vest ($10k)',
        },
        premium: {
          className: 'top-[38%] left-[50%] -translate-x-1/2 w-28 h-36 rounded-lg bg-gradient-to-b from-blue-600 to-blue-900 border-4 border-yellow-400 shadow-lg shadow-blue-500/50',
          label: 'Ultimate Armor (Unlimited)',
        },
      },
      shield: {
        basic: {
          className: 'top-[40%] left-[50%] -translate-x-1/2 w-32 h-32 rounded-full bg-cyan-400/30 border-2 border-cyan-500',
          label: 'Shield (70%)',
        },
        standard: {
          className: 'top-[38%] left-[50%] -translate-x-1/2 w-36 h-36 rounded-full bg-cyan-400/40 border-3 border-cyan-400',
          label: 'Shield (80%)',
        },
        premium: {
          className: 'top-[36%] left-[50%] -translate-x-1/2 w-40 h-40 rounded-full bg-cyan-300/50 border-4 border-cyan-300 shadow-lg shadow-cyan-400/50',
          label: 'Shield (90%)',
        },
      },
      helmet: {
        basic: {
          className: 'top-[22%] left-[50%] -translate-x-1/2 w-16 h-12 rounded-t-full bg-gradient-to-b from-purple-400 to-purple-600',
          label: 'Basic Helmet ($1000 ded)',
        },
        standard: {
          className: 'top-[20%] left-[50%] -translate-x-1/2 w-20 h-14 rounded-t-full bg-gradient-to-b from-purple-500 to-purple-700 border-2 border-purple-300',
          label: 'Standard Helmet ($500 ded)',
        },
        premium: {
          className: 'top-[18%] left-[50%] -translate-x-1/2 w-24 h-16 rounded-t-full bg-gradient-to-b from-purple-600 to-purple-900 border-4 border-yellow-400 shadow-lg shadow-purple-500/50',
          label: 'Premium Helmet ($250 ded)',
        },
      },
    };

    return configs[type][level];
  };

  const config = getArmorConfig();

  // Z-index layering
  const zIndexMap = {
    body: 2,
    shield: 5,
    helmet: 4,
  };

  return (
    <motion.div
      key={`${type}-${level}`}
      initial={{ scale: 0, opacity: 0, rotate: -20 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0, opacity: 0, rotate: 20 }}
      transition={{
        delay,
        duration: 0.6,
        type: 'spring',
        stiffness: 180,
        damping: 12,
      }}
      className={`absolute ${config.className}`}
      style={{ zIndex: zIndexMap[type] }}
      title={config.label}
    >
      {/* Inner shine effect for premium items */}
      {level === 'premium' && (
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full"
        />
      )}
    </motion.div>
  );
}

interface WellnessEffectProps {
  tier: WellnessTier;
}

/**
 * WellnessEffect Component
 * Renders glow effects for wellness coverage
 */
export function WellnessEffect({ tier }: WellnessEffectProps) {
  if (tier === 'none') return null;

  const getGlowConfig = () => {
    if (tier === 'platinum') {
      return {
        className: 'absolute inset-0 bg-gradient-radial from-yellow-300/40 via-yellow-200/20 to-transparent',
        duration: 3,
        badge: true,
      };
    }
    return {
      className: 'absolute inset-0 bg-gradient-radial from-green-300/30 via-green-200/15 to-transparent',
      duration: 4,
      badge: false,
    };
  };

  const config = getGlowConfig();

  return (
    <>
      {/* Pulsing glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: config.duration, repeat: Infinity }}
        className={config.className}
        style={{ zIndex: 20 }}
      />

      {/* Premium wellness badge */}
      {config.badge && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          className="absolute top-[10%] right-[20%] w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-yellow-300 shadow-lg"
          style={{ zIndex: 25 }}
        >
          ⭐
        </motion.div>
      )}
    </>
  );
}
