// Contract addresses
export const CONTRACT_ADDRESS = '0x...'; // Replace with actual address

// Status constants
export const LISTING_STATUS = {
  ACTIVE: 'active',
  PENDING: 'pending',
  MATCHED: 'matched',
  COMPLETED: 'completed'
} as const;

// Credit score ranges
export const CREDIT_SCORE_RANGES = {
  EXCELLENT: { min: 800, max: 850, label: 'Excellent' },
  VERY_GOOD: { min: 740, max: 799, label: 'Very Good' },
  GOOD: { min: 670, max: 739, label: 'Good' },
  FAIR: { min: 580, max: 669, label: 'Fair' },
  POOR: { min: 300, max: 579, label: 'Poor' }
} as const;