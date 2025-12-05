'use client';

import { useState } from 'react';
import SwapPetDisplay from '@/components/SwapPetDisplay';
import QuoteForm from '@/components/QuoteForm';
import { QuoteParameters, calculateArmorConfig } from '@/types/quoteForm';
import { calculateEstimatedPrice } from '@/utils/pricing';

export default function Home() {
  const petType = 'dog';
  const [quoteParams, setQuoteParams] = useState<QuoteParameters>({
    annualLimit: 3000,
    reimbursementPercent: 70,
    deductible: 1000,
    wellnessTier: 'none',
  });

  // Calculate armor configuration based on quote parameters
  const armorConfig = calculateArmorConfig(quoteParams);
  const estimatedPrice = calculateEstimatedPrice(quoteParams);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Pet Armor Builder
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Watch your pet get armored up as you customize coverage!
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Pet Display */}
          <div className="lg:sticky lg:top-8">
            <SwapPetDisplay petType={petType} armorConfig={armorConfig} />
          </div>

          {/* Quote Form */}
          <div>
            <QuoteForm
              parameters={quoteParams}
              onChange={setQuoteParams}
              estimatedPrice={estimatedPrice}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            💡 Pet Project Day Demo - Adjust coverage parameters and watch the
            armor upgrade in real-time!
          </p>
        </div>
      </div>
    </div>
  );
}
