'use client';

import { motion } from 'framer-motion';
import { CoverageOption, CoverageTier } from '@/types/coverage';
import { coverageOptions } from '@/data/coverageData';

interface CoverageSelectorProps {
  selectedTier: CoverageTier;
  onSelectTier: (tier: CoverageTier) => void;
}

/**
 * CoverageSelector Component
 * Displays coverage tiers as interactive cards
 *
 * Features:
 * - Hover effects
 * - Active state highlighting
 * - Shows price and description
 */
export default function CoverageSelector({
  selectedTier,
  onSelectTier,
}: CoverageSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Choose Your Coverage Level
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {coverageOptions.map((option) => {
          const isSelected = selectedTier === option.id;

          return (
            <motion.button
              key={option.id}
              onClick={() => onSelectTier(option.id)}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="font-bold text-lg mb-2 text-gray-800">
                {option.name}
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                ${option.price}
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              <div className="text-sm text-gray-600">{option.description}</div>
              <div className="mt-3 text-xs text-gray-500">
                {option.armorPieces.length} armor piece
                {option.armorPieces.length !== 1 ? 's' : ''}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
