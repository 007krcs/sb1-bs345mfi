import React from 'react';
import { Shield, Link as ChainLink, Users } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <span className="text-xl font-bold">CreditBridge</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="hover:text-indigo-200 transition">How It Works</a>
            <a href="#benefits" className="hover:text-indigo-200 transition">Benefits</a>
            <a href="#marketplace" className="hover:text-indigo-200 transition">Marketplace</a>
          </div>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}