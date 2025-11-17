'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArmorConfiguration } from '@/types/quoteForm';

interface SwapPetDisplayProps {
  petType: 'dog' | 'cat';
  armorConfig: ArmorConfiguration;
}

/**
 * SwapPetDisplay Component
 * Swaps entire pet image based on armor level (no layering)
 * Much simpler and avoids positioning issues!
 */
export default function SwapPetDisplay({ petType, armorConfig }: SwapPetDisplayProps) {
  const { protectionScore } = armorConfig;

  // Determine armor level based on protection score (35-155 range)
  const getArmorLevel = (score: number): number => {
    if (score < 40) return 0; // No armor (below 40 points - minimum config)
    if (score <= 70) return 1; // Light armor (40-70 points)
    if (score <= 100) return 2; // Medium armor (71-100 points)
    if (score <= 120) return 3; // Heavy armor (101-120 points)
    return 4; // Ultimate armor (over 120 points)
  };

  const armorLevel = getArmorLevel(protectionScore);

  // Get image path based on pet type, armor level, and wellness tier
  const getImagePath = () => {
    const base = `/assets/pets/${petType}`;

    // All armor levels (0-4) have wellness variants
    const wellnessSuffix =
      armorConfig.wellnessGlow === 'platinum' ? 'platinum' :
      armorConfig.wellnessGlow === 'gold' ? 'gold' :
      'none';

    return `${base}-armor-${armorLevel}-${wellnessSuffix}.png`;
  };

  // Get armor level description
  const getArmorDescription = (level: number): string => {
    const descriptions = [
      'No Protection',
      'Light Armor',
      'Medium Armor',
      'Heavy Armor',
      'Ultimate Armor',
    ];
    return descriptions[level];
  };

  // Background color intensity based on protection score
  const getBgGradient = () => {
    if (protectionScore >= 80) return 'from-orange-100 to-orange-50';
    if (protectionScore >= 50) return 'from-orange-50 to-yellow-50';
    if (protectionScore >= 25) return 'from-yellow-100 to-yellow-50';
    return 'from-gray-100 to-gray-50';
  };

  return (
    <div className="w-full">
      {/* Protection Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">
            Protection Level
          </span>
          <span className="text-lg font-bold text-orange-600">
            {protectionScore}/155
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(protectionScore / 155) * 100}%` }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={`h-full rounded-full ${
              protectionScore >= 80
                ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                : protectionScore >= 50
                ? 'bg-gradient-to-r from-orange-300 to-orange-500'
                : protectionScore >= 25
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400'
                : 'bg-gradient-to-r from-gray-400 to-gray-600'
            }`}
          />
        </div>
        <div className="text-center mt-2">
          <span className="text-sm font-semibold text-gray-600">
            {getArmorDescription(armorLevel)}
          </span>
        </div>
      </div>

      {/* Badge + Pet Display Container */}
      <div className="relative flex items-center justify-center gap-6">
        {/* Maximum Protection Badge (left side) */}
        <AnimatePresence>
          {protectionScore === 155 && (
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 50 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="relative flex-shrink-0"
            >
              {/* Pulsing badge */}
              <motion.img
                src="/assets/maximum-protection-badge.png"
                alt="Maximum Protection"
                className="w-40 h-40 drop-shadow-2xl"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Sparkle effects around badge */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 80],
                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 80],
                    opacity: [1, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pet Display with Image Swap */}
        <div
          className={`relative w-full max-w-md aspect-square bg-gradient-to-b ${getBgGradient()} rounded-2xl shadow-2xl overflow-hidden transition-all duration-500`}
        >
        {/* Animated Image Swap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${petType}-${armorLevel}`}
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Pet Image with Armor */}
            <img
              src={getImagePath()}
              alt={`${petType} with ${getArmorDescription(armorLevel)}`}
              className="w-full h-full object-contain p-8"
            />
          </motion.div>
        </AnimatePresence>

        {/* Celebration effect for max protection - pulsing border */}
        {protectionScore === 155 && (
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 border-8 border-orange-400 rounded-2xl"
          />
        )}

        {/* Wellness glow is now baked into the images, no overlay needed */}
        </div>
      </div>

      {/* Active Coverage Summary */}
      <div className="mt-6 bg-white rounded-xl p-4 shadow-md">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Coverage Details</h3>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-gray-500">Annual Limit</div>
            <div className="font-semibold text-gray-800 capitalize">
              {armorConfig.bodyArmor}
            </div>
          </div>
          <div>
            <div className="text-gray-500">Reimbursement</div>
            <div className="font-semibold text-gray-800 capitalize">
              {armorConfig.shield}
            </div>
          </div>
          <div>
            <div className="text-gray-500">Deductible</div>
            <div className="font-semibold text-gray-800 capitalize">
              {armorConfig.helmet}
            </div>
          </div>
          <div>
            <div className="text-gray-500">Wellness</div>
            <div className="font-semibold text-gray-800 capitalize">
              {armorConfig.wellnessGlow}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
