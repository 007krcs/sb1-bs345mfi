import React from 'react';
import { validateCreditScore, validateDuration, validateAmount, validateFee } from '../../utils/validation';

interface ListingFormProps {
  formData: {
    score: string;
    duration: string;
    amount: string;
    fee: string;
  };
  onChange: (data: any) => void;
  errors: Record<string, string>;
}

export const ListingForm: React.FC<ListingFormProps> = ({ formData, onChange, errors }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Credit Score</label>
        <input
          type="number"
          name="score"
          value={formData.score}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.score && <p className="mt-1 text-sm text-red-600">{errors.score}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (months)</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.duration && <p className="mt-1 text-sm text-red-600">{errors.duration}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Fee (%)</label>
        <input
          type="number"
          name="fee"
          value={formData.fee}
          onChange={handleChange}
          step="0.1"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.fee && <p className="mt-1 text-sm text-red-600">{errors.fee}</p>}
      </div>
    </div>
  );
};