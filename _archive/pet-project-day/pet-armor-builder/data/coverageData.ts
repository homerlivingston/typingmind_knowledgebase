/**
 * Coverage Data
 * Defines the available coverage tiers and their associated armor pieces
 */

import { CoverageOption, AddOn, ArmorPiece } from '@/types/coverage';

export const coverageOptions: CoverageOption[] = [
  {
    id: 'none',
    name: 'No Coverage',
    price: 0,
    description: 'Your pet is unprotected',
    armorPieces: [],
  },
  {
    id: 'basic',
    name: 'Basic Coverage',
    price: 29,
    description: 'Essential protection for accidents',
    armorPieces: ['collar'],
  },
  {
    id: 'standard',
    name: 'Standard Coverage',
    price: 49,
    description: 'Comprehensive accident & illness coverage',
    armorPieces: ['collar', 'vest'],
  },
  {
    id: 'enhanced',
    name: 'Enhanced Coverage',
    price: 69,
    description: 'Maximum protection plus wellness',
    armorPieces: ['collar', 'vest', 'helmet', 'leg-guards'],
  },
  {
    id: 'ultimate',
    name: 'Ultimate Coverage',
    price: 99,
    description: 'Complete protection with all benefits',
    armorPieces: ['collar', 'vest', 'helmet', 'leg-guards', 'shield', 'cape'],
  },
];

export const addOns: AddOn[] = [
  {
    id: 'wellness',
    name: 'Wellness Package',
    price: 15,
    armorPiece: 'shield',
    description: 'Preventive care coverage',
  },
  {
    id: 'dental',
    name: 'Dental Coverage',
    price: 10,
    armorPiece: 'helmet',
    description: 'Dental procedures & cleanings',
  },
];

export const armorPieces: ArmorPiece[] = [
  {
    id: 'collar',
    name: 'Protective Collar',
    tier: 'basic',
    zIndex: 3,
    description: 'Basic protection',
  },
  {
    id: 'vest',
    name: 'Armor Vest',
    tier: 'standard',
    zIndex: 2,
    description: 'Core body protection',
  },
  {
    id: 'helmet',
    name: 'Battle Helmet',
    tier: 'enhanced',
    zIndex: 4,
    description: 'Head protection',
  },
  {
    id: 'leg-guards',
    name: 'Leg Guards',
    tier: 'enhanced',
    zIndex: 1,
    description: 'Limb protection',
  },
  {
    id: 'shield',
    name: 'Energy Shield',
    tier: 'ultimate',
    zIndex: 5,
    description: 'Maximum defense',
  },
  {
    id: 'cape',
    name: 'Hero Cape',
    tier: 'ultimate',
    zIndex: 0,
    description: 'Ultimate protection',
  },
];
