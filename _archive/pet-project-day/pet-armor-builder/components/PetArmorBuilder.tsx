'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArmorPieceType } from '@/types/coverage';
import { armorPieces } from '@/data/coverageData';
import ArmorPiece from './ArmorPiece';

interface PetArmorBuilderProps {
  petType: 'dog' | 'cat';
  activeArmorPieces: ArmorPieceType[];
}

/**
 * PetArmorBuilder Component
 * Main component that displays the pet and orchestrates armor piece animations
 *
 * Features:
 * - Base pet illustration
 * - Layered armor pieces with staggered entrance animations
 * - AnimatePresence for smooth additions/removals
 */
export default function PetArmorBuilder({
  petType,
  activeArmorPieces,
}: PetArmorBuilderProps) {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto bg-gradient-to-b from-blue-100 to-blue-50 rounded-2xl shadow-2xl overflow-hidden">
      {/* Base Pet (placeholder) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 shadow-lg flex items-center justify-center"
        style={{ zIndex: 10 }}
      >
        <div className="text-6xl">
          {petType === 'dog' ? '🐕' : '🐱'}
        </div>
      </motion.div>

      {/* Armor Pieces */}
      <AnimatePresence mode="sync">
        {activeArmorPieces.map((pieceType, index) => {
          const piece = armorPieces.find((p) => p.id === pieceType);
          if (!piece) return null;

          return (
            <ArmorPiece
              key={piece.id}
              type={piece.id}
              zIndex={piece.zIndex}
              delay={index * 0.2} // Stagger animations
            />
          );
        })}
      </AnimatePresence>

      {/* Glow effect when fully armored */}
      {activeArmorPieces.length >= 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-radial from-yellow-300/30 to-transparent pointer-events-none"
          style={{ zIndex: 20 }}
        />
      )}
    </div>
  );
}
