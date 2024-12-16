import React from 'react';
import { Shield, TrendingUp, Lock, Users, CreditCard, LineChart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Secure Reputation Leasing",
      description: "Safely lease your credit reputation through blockchain-verified smart contracts."
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "Community-Driven",
      description: "Join a network of users helping others build their financial future."
    },
    {
      icon: <Lock className="w-12 h-12 text-indigo-600" />,
      title: "Blockchain Security",
      description: "Advanced encryption and immutable records protect all transactions."
    },
    {
      icon: <LineChart className="w-12 h-12 text-indigo-600" />,
      title: "Credit Growth",
      description: "Track and improve credit scores through verified reputation history."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-indigo-600" />,
      title: "Better Terms",
      description: "Access improved borrowing terms through reputation backing."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
      title: "Financial Inclusion",
      description: "Breaking barriers to financial access for underserved communities."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transforming Credit Access
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our platform is reshaping the future of financial services
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}