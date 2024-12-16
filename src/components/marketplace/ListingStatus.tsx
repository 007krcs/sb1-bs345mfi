import React from 'react';
import { LISTING_STATUS } from '../../utils/constants';

interface ListingStatusProps {
  status: keyof typeof LISTING_STATUS;
}

export const ListingStatus: React.FC<ListingStatusProps> = ({ status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'MATCHED':
        return 'bg-blue-100 text-blue-800';
      case 'COMPLETED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor()}`}>
      {LISTING_STATUS[status]}
    </span>
  );
};