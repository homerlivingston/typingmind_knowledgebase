'use client';

import { motion } from 'framer-motion';
import { ArmorConfiguration } from '@/types/quoteForm';
import QuoteArmor, { WellnessEffect } from './QuoteArmor';

interface QuotePetDisplayProps {
  petType: 'dog' | 'cat';
  armorConfig: ArmorConfiguration;
}

/**
 * QuotePetDisplay Component
 * Displays pet with armor that upgrades based on quote parameters
 */
export default function QuotePetDisplay({ petType, armorConfig }: QuotePetDisplayProps) {
  const { bodyArmor, shield, helmet, wellnessGlow, protectionScore } = armorConfig;

  // Background color intensity based on protection score
  const getBgGradient = () => {
    if (protectionScore >= 80) {
      return 'from-green-100 to-green-50';
    } else if (protectionScore >= 50) {
      return 'from-blue-100 to-blue-50';
    } else if (protectionScore >= 25) {
      return 'from-yellow-100 to-yellow-50';
    }
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
          <span className="text-lg font-bold text-blue-600">
            {protectionScore}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${protectionScore}%` }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={`h-full rounded-full ${
              protectionScore >= 80
                ? 'bg-gradient-to-r from-green-400 to-green-600'
                : protectionScore >= 50
                ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                : protectionScore >= 25
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                : 'bg-gradient-to-r from-gray-400 to-gray-600'
            }`}
          />
        </div>
      </div>

      {/* Pet Display */}
      <div
        className={`relative w-full max-w-md aspect-square mx-auto bg-gradient-to-b ${getBgGradient()} rounded-2xl shadow-2xl overflow-hidden transition-all duration-500`}
      >
        {/* Base Pet */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 shadow-lg flex items-center justify-center"
          style={{ zIndex: 10 }}
        >
          <div className="text-6xl">{petType === 'dog' ? '🐕' : '🐱'}</div>
        </motion.div>

        {/* Shield (appears behind pet but in front of body armor) */}
        <QuoteArmor type="shield" level={shield} delay={0.1} />

        {/* Body Armor */}
        <QuoteArmor type="body" level={bodyArmor} delay={0.2} />

        {/* Helmet */}
        <QuoteArmor type="helmet" level={helmet} delay={0.3} />

        {/* Wellness Glow Effect */}
        <WellnessEffect tier={wellnessGlow} />

        {/* Celebration effect for max protection */}
        {protectionScore === 100 && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 border-8 border-yellow-400 rounded-2xl"
              style={{ zIndex: 30 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              style={{ zIndex: 30 }}
            >
              🛡️ MAXIMUM PROTECTION 🛡️
            </motion.div>
          </>
        )}
      </div>

      {/* Active Protection Details */}
      <div className="mt-6 space-y-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Active Coverage:</h3>
        <div className="space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                bodyArmor !== 'none' ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
            <span className={bodyArmor !== 'none' ? 'text-gray-800' : 'text-gray-400'}>
              Body Armor:{' '}
              <span className="font-semibold capitalize">{bodyArmor}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                shield !== 'none' ? 'bg-cyan-500' : 'bg-gray-300'
              }`}
            />
            <span className={shield !== 'none' ? 'text-gray-800' : 'text-gray-400'}>
              Shield: <span className="font-semibold capitalize">{shield}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                helmet !== 'none' ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
            <span className={helmet !== 'none' ? 'text-gray-800' : 'text-gray-400'}>
              Helmet: <span className="font-semibold capitalize">{helmet}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                wellnessGlow !== 'none' ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            <span
              className={wellnessGlow !== 'none' ? 'text-gray-800' : 'text-gray-400'}
            >
              Wellness: <span className="font-semibold capitalize">{wellnessGlow}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
