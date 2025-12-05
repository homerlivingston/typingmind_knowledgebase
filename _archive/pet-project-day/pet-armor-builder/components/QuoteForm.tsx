'use client';

import { motion } from 'framer-motion';
import {
  QuoteParameters,
  AnnualLimit,
  ReimbursementPercent,
  Deductible,
  WellnessTier,
} from '@/types/quoteForm';

interface QuoteFormProps {
  parameters: QuoteParameters;
  onChange: (parameters: QuoteParameters) => void;
  estimatedPrice?: number;
}

/**
 * QuoteForm Component
 * Realistic quote form controls matching Spot's actual quote flow
 */
export default function QuoteForm({ parameters, onChange, estimatedPrice }: QuoteFormProps) {
  const updateParam = <K extends keyof QuoteParameters>(
    key: K,
    value: QuoteParameters[K]
  ) => {
    onChange({ ...parameters, [key]: value });
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Annual Limit */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Annual Limit
          <span className="ml-2 text-xs font-normal text-gray-500">
            Maximum payout per year
          </span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {([3000, 4000, 5000, 7000, 10000, 'unlimited'] as AnnualLimit[]).map((limit) => {
            const isSelected = parameters.annualLimit === limit;
            const displayValue = limit === 'unlimited' ? 'Unlimited' : `$${(limit / 1000).toFixed(0)}k`;

            return (
              <motion.button
                key={limit}
                onClick={() => updateParam('annualLimit', limit)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`py-4 px-4 rounded-lg font-semibold transition-all ${
                  isSelected
                    ? 'bg-orange-600 text-white shadow-lg ring-2 ring-orange-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {displayValue}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Reimbursement Percent */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Reimbursement Percentage
          <span className="ml-2 text-xs font-normal text-gray-500">
            What we pay after deductible
          </span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {([70, 80, 90] as ReimbursementPercent[]).map((percent) => {
            const isSelected = parameters.reimbursementPercent === percent;

            return (
              <motion.button
                key={percent}
                onClick={() => updateParam('reimbursementPercent', percent)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`py-4 px-4 rounded-lg font-semibold transition-all ${
                  isSelected
                    ? 'bg-orange-600 text-white shadow-lg ring-2 ring-orange-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {percent}%
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Deductible */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Annual Deductible
          <span className="ml-2 text-xs font-normal text-gray-500">
            What you pay before coverage kicks in
          </span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {([100, 250, 500, 750, 1000] as Deductible[]).map((deductible) => {
            const isSelected = parameters.deductible === deductible;

            return (
              <motion.button
                key={deductible}
                onClick={() => updateParam('deductible', deductible)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`py-4 px-4 rounded-lg font-semibold transition-all ${
                  isSelected
                    ? 'bg-orange-600 text-white shadow-lg ring-2 ring-orange-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ${deductible}
              </motion.button>
            );
          })}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          💡 Lower deductible = better protection (but higher premium)
        </p>
      </div>

      {/* Wellness Care */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Wellness Care
          <span className="ml-2 text-xs font-normal text-gray-500">
            Preventive care coverage
          </span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {([
            { value: 'none' as WellnessTier, label: 'None', desc: 'No wellness' },
            { value: 'gold' as WellnessTier, label: 'Gold', desc: 'Basic wellness' },
            { value: 'platinum' as WellnessTier, label: 'Platinum', desc: 'Premium wellness' },
          ]).map((option) => {
            const isSelected = parameters.wellnessTier === option.value;

            return (
              <motion.button
                key={option.value}
                onClick={() => updateParam('wellnessTier', option.value)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`py-4 px-4 rounded-lg font-semibold transition-all ${
                  isSelected
                    ? option.value === 'platinum'
                      ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-lg ring-2 ring-yellow-400'
                      : option.value === 'gold'
                      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-400'
                      : 'bg-gray-600 text-white shadow-lg ring-2 ring-gray-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div>{option.label}</div>
                <div className="text-xs opacity-80">{option.desc}</div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Estimated Price Display */}
      {estimatedPrice !== undefined && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-6 text-white shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Estimated Monthly Premium</div>
              <div className="text-4xl font-bold">${estimatedPrice}</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Get Quote
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
