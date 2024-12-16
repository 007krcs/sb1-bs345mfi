import React from 'react';
import { CREDIT_SCORE_RANGES } from '../../utils/constants';

interface ListingFiltersProps {
  filters: {
    minScore: string;
    maxAmount: string;
    maxDuration: string;
  };
  onChange: (filters: any) => void;
}

export const ListingFilters: React.FC<ListingFiltersProps> = ({ filters, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h3 className="text-lg font-semibold mb-4">Filter Listings</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Credit Score</label>
          <select
            name="minScore"
            value={filters.minScore}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Any Score</option>
            {Object.entries(CREDIT_SCORE_RANGES).map(([key, range]) => (
              <option key={key} value={range.min}>
                {range.label} ({range.min}+)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Maximum Amount</label>
          <input
            type="number"
            name="maxAmount"
            value={filters.maxAmount}
            onChange={handleChange}
            placeholder="Any Amount"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Maximum Duration</label>
          <input
            type="number"
            name="maxDuration"
            value={filters.maxDuration}
            onChange={handleChange}
            placeholder="Any Duration"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
    </div>
  );
};