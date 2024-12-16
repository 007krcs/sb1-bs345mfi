import { useState, useCallback } from 'react';
import { Listing } from '../types/marketplace';

interface Filters {
  minScore: string;
  maxAmount: string;
  maxDuration: string;
}

export const useListingFilters = (listings: Listing[]) => {
  const [filters, setFilters] = useState<Filters>({
    minScore: '',
    maxAmount: '',
    maxDuration: ''
  });

  const filteredListings = useCallback(() => {
    return listings.filter(listing => {
      const score = parseInt(listing.score);
      const amount = parseFloat(listing.amount.replace(/[^0-9.-]+/g, ''));
      const duration = parseInt(listing.duration);

      if (filters.minScore && score < parseInt(filters.minScore)) return false;
      if (filters.maxAmount && amount > parseFloat(filters.maxAmount)) return false;
      if (filters.maxDuration && duration > parseInt(filters.maxDuration)) return false;

      return true;
    });
  }, [listings, filters]);

  return {
    filters,
    setFilters,
    filteredListings: filteredListings()
  };
};