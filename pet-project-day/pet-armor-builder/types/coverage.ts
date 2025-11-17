/**
 * Coverage Types for Pet Armor Builder
 * Defines the coverage tiers and armor pieces that appear as users upgrade
 */

export type CoverageTier = 'none' | 'basic' | 'standard' | 'enhanced' | 'ultimate';

export type ArmorPieceType =
  | 'collar'
  | 'vest'
  | 'helmet'
  | 'leg-guards'
  | 'shield'
  | 'cape';

export interface ArmorPiece {
  id: ArmorPieceType;
  name: string;
  tier: CoverageTier;
  zIndex: number; // Layer order for rendering
  description?: string;
}

export interface CoverageOption {
  id: CoverageTier;
  name: string;
  price: number;
  description: string;
  armorPieces: ArmorPieceType[];
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  armorPiece: ArmorPieceType;
  description: string;
}
