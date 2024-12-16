import { useState } from 'react';
import { ethers } from 'ethers';
import { creditBridgeABI } from '../contracts/creditBridgeABI';

const CONTRACT_ADDRESS = '0x...'; // Replace with actual contract address

export const useSmartContract = (provider: any) => {
  const [contract, setContract] = useState<any>(null);

  const initializeContract = async () => {
    if (!provider) return;
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, creditBridgeABI, signer);
    setContract(contract);
  };

  const createListing = async (score: number, duration: number, amount: string, fee: number) => {
    if (!contract) return;
    try {
      const tx = await contract.createListing(score, duration, ethers.parseEther(amount), fee);
      await tx.wait();
      return tx.hash;
    } catch (error) {
      console.error('Error creating listing:', error);
      throw error;
    }
  };

  return { contract, initializeContract, createListing };
};