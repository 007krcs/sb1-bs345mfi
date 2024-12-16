import React from 'react';
import { Shield, TrendingUp, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Revolutionizing Financial Access Through Blockchain
          </h1>
          <p className="text-xl mb-8 text-indigo-100">
            Join the first-ever credit reputation marketplace where good credit scores create opportunities for others.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
              Lease Your Credit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}