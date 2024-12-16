import { useState } from 'react';
import {
  validateCreditScore,
  validateDuration,
  validateAmount,
  validateFee
} from '../utils/validation';

interface FormData {
  score: string;
  duration: string;
  amount: string;
  fee: string;
}

export const useFormValidation = (initialData: FormData) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!validateCreditScore(Number(formData.score))) {
      newErrors.score = 'Invalid credit score (300-850)';
    }

    if (!validateDuration(Number(formData.duration))) {
      newErrors.duration = 'Duration must be between 1-60 months';
    }

    if (!validateAmount(formData.amount)) {
      newErrors.amount = 'Invalid amount';
    }

    if (!validateFee(formData.fee)) {
      newErrors.fee = 'Fee must be between 0.1% and 10%';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    setFormData,
    errors,
    validate
  };
};