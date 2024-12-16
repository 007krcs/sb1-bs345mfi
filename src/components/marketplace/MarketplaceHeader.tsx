import React from 'react';
import { useWallet } from '../../hooks/useWallet';

interface MarketplaceHeaderProps {
  onCreateListing: () => void;
}

export const MarketplaceHeader: React.FC<MarketplaceHeaderProps> = ({ onCreateListing }) => {
  const { account, connectWallet } = useWallet();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Active Listings</h2>
        <p className="text-xl text-gray-600">Browse available credit reputation offerings</p>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        {!account ? (
          <button
            onClick={connectWallet}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={onCreateListing}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Create Listing
          </button>
        )}
      </div>
    </div>
  );
};