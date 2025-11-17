/**
 * Simple pricing calculator for demo purposes
 * (In real app, this would call Spot's pricing API)
 */

import { QuoteParameters } from '@/types/quoteForm';

export function calculateEstimatedPrice(params: QuoteParameters): number {
  let basePrice = 20; // Starting at $20/mo

  // Annual Limit impact
  if (params.annualLimit === 'unlimited') {
    basePrice += 40;
  } else if (params.annualLimit === 10000) {
    basePrice += 30;
  } else if (params.annualLimit === 7000) {
    basePrice += 22;
  } else if (params.annualLimit === 5000) {
    basePrice += 15;
  } else if (params.annualLimit === 4000) {
    basePrice += 10;
  } else if (params.annualLimit === 3000) {
    basePrice += 5;
  }

  // Reimbursement % impact
  if (params.reimbursementPercent === 90) {
    basePrice += 25;
  } else if (params.reimbursementPercent === 80) {
    basePrice += 15;
  } else if (params.reimbursementPercent === 70) {
    basePrice += 8;
  }

  // Deductible impact (inverse - lower deductible = higher premium)
  if (params.deductible === 100) {
    basePrice += 30;
  } else if (params.deductible === 250) {
    basePrice += 22;
  } else if (params.deductible === 500) {
    basePrice += 15;
  } else if (params.deductible === 750) {
    basePrice += 8;
  } else if (params.deductible === 1000) {
    basePrice += 3;
  }

  // Wellness tier impact
  if (params.wellnessTier === 'platinum') {
    basePrice += 18;
  } else if (params.wellnessTier === 'gold') {
    basePrice += 10;
  }

  return Math.round(basePrice);
}
