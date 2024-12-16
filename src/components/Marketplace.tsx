import React, { useState } from 'react';
import { ListingCard } from './marketplace/ListingCard';
import { CreateListingModal } from './marketplace/CreateListingModal';
import { MarketplaceHeader } from './marketplace/MarketplaceHeader';
import { useWallet } from '../hooks/useWallet';

export default function Marketplace() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { provider } = useWallet();
  
  const listings = [
    {
      score: "820",
      duration: "6 months",
      amount: "$25,000",
      reputation: "Excellent",
      fee: "2.5%"
    },
    {
      score: "780",
      duration: "12 months",
      amount: "$50,000",
      reputation: "Very Good",
      fee: "3.0%"
    },
    {
      score: "750",
      duration: "9 months",
      amount: "$30,000",
      reputation: "Good",
      fee: "3.2%"
    }
  ];

  const handleRequestMatch = () => {
    // Implement match request logic
  };

  return (
    <section className="py-20 bg-gray-50" id="marketplace">
      <div className="container mx-auto px-6">
        <MarketplaceHeader onCreateListing={() => setIsModalOpen(true)} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <ListingCard
              key={index}
              listing={listing}
              onRequestMatch={handleRequestMatch}
            />
          ))}
        </div>
        <CreateListingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          provider={provider}
        />
      </div>
    </section>
  );
}