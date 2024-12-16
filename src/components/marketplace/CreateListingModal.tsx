import React, { useState } from 'react';
import { useSmartContract } from '../../hooks/useSmartContract';

interface CreateListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  provider: any;
}

export const CreateListingModal: React.FC<CreateListingModalProps> = ({ isOpen, onClose, provider }) => {
  const [formData, setFormData] = useState({
    score: '',
    duration: '',
    amount: '',
    fee: ''
  });

  const { contract, createListing } = useSmartContract(provider);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createListing(
        parseInt(formData.score),
        parseInt(formData.duration),
        formData.amount,
        parseFloat(formData.fee)
      );
      onClose();
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Create Listing</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Credit Score</label>
            <input
              type="number"
              value={formData.score}
              onChange={(e) => setFormData({ ...formData, score: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          {/* Add more form fields */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Create Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};