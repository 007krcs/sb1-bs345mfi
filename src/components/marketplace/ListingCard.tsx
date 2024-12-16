import React from 'react';
import { Shield } from 'lucide-react';
import { formatEther } from 'ethers';

interface ListingCardProps {
  listing: {
    score: string;
    duration: string;
    amount: string;
    reputation: string;
    fee: string;
  };
  onRequestMatch: () => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onRequestMatch }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-indigo-600" />
          <span className="text-2xl font-bold text-indigo-600">{listing.score}</span>
        </div>
        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
          {listing.reputation}
        </span>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Duration</span>
          <span className="font-semibold">{listing.duration}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Amount</span>
          <span className="font-semibold">{listing.amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Fee</span>
          <span className="font-semibold">{listing.fee}</span>
        </div>
      </div>
      <button 
        onClick={onRequestMatch}
        className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Request Match
      </button>
    </div>
  );
};