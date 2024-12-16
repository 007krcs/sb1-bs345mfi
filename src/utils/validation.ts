export const validateCreditScore = (score: number): boolean => {
  return score >= 300 && score <= 850;
};

export const validateDuration = (months: number): boolean => {
  return months >= 1 && months <= 60;
};

export const validateAmount = (amount: string): boolean => {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0 && num <= 1000000;
};

export const validateFee = (fee: string): boolean => {
  const num = parseFloat(fee);
  return !isNaN(num) && num >= 0.1 && num <= 10;
};