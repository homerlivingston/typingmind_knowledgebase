/**
 * Quote Form Types for Pet Armor Builder
 * Maps Spot's actual quote form parameters to armor visualization
 */

export type AnnualLimit = 3000 | 4000 | 5000 | 7000 | 10000 | 'unlimited';
export type ReimbursementPercent = 70 | 80 | 90;
export type Deductible = 100 | 250 | 500 | 750 | 1000;
export type WellnessTier = 'none' | 'gold' | 'platinum';

export interface QuoteParameters {
  annualLimit: AnnualLimit;
  reimbursementPercent: ReimbursementPercent;
  deductible: Deductible;
  wellnessTier: WellnessTier;
}

export type ArmorLevel = 'none' | 'basic' | 'standard' | 'premium';

export interface ArmorConfiguration {
  // Core armor pieces - upgrade based on parameters
  bodyArmor: ArmorLevel; // Driven by Annual Limit
  shield: ArmorLevel; // Driven by Reimbursement %
  helmet: ArmorLevel; // Driven by Deductible (inverse - lower = better)

  // Special effects
  wellnessGlow: WellnessTier; // Driven by Wellness tier

  // Display metadata
  protectionScore: number; // 0-100 overall coverage quality
}

// Maps quote parameters to visual armor configuration
export function calculateArmorConfig(params: QuoteParameters): ArmorConfiguration {
  // Calculate protection score (0-155 max)
  let score = 0;

  // Annual Limit contribution (60 points max, increments of 10)
  // $3k=10, $4k=20, $5k=30, $7k=40, $10k=50, Unlimited=60
  if (params.annualLimit === 'unlimited') score += 60;
  else if (params.annualLimit === 10000) score += 50;
  else if (params.annualLimit === 7000) score += 40;
  else if (params.annualLimit === 5000) score += 30;
  else if (params.annualLimit === 4000) score += 20;
  else if (params.annualLimit === 3000) score += 10;

  // Reimbursement contribution (45 points max, increments of 15)
  // 70%=15, 80%=30, 90%=45
  if (params.reimbursementPercent === 90) score += 45;
  else if (params.reimbursementPercent === 80) score += 30;
  else if (params.reimbursementPercent === 70) score += 15;

  // Deductible contribution (50 points max, increments of 10, INVERSE)
  // $1000=10, $750=20, $500=30, $250=40, $100=50
  if (params.deductible === 100) score += 50;
  else if (params.deductible === 250) score += 40;
  else if (params.deductible === 500) score += 30;
  else if (params.deductible === 750) score += 20;
  else if (params.deductible === 1000) score += 10;

  // Map score ranges to armor levels for display
  const bodyArmor: ArmorLevel =
    score >= 120 ? 'premium' :
    score >= 80 ? 'standard' :
    score >= 40 ? 'basic' : 'none';

  const shield: ArmorLevel =
    params.reimbursementPercent === 90 ? 'premium' :
    params.reimbursementPercent === 80 ? 'standard' : 'basic';

  const helmet: ArmorLevel =
    params.deductible <= 250 ? 'premium' :
    params.deductible <= 500 ? 'standard' : 'basic';

  return {
    bodyArmor,
    shield,
    helmet,
    wellnessGlow: params.wellnessTier,
    protectionScore: score,
  };
}
