import { ethers } from 'ethers';

export const shortenAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const parseEtherValue = (value: string): string => {
  try {
    return ethers.parseEther(value).toString();
  } catch (error) {
    return '0';
  }
};

export const formatEtherValue = (value: string): string => {
  try {
    return ethers.formatEther(value);
  } catch (error) {
    return '0';
  }
};