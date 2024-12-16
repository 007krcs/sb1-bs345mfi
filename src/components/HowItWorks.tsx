import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Credit Profile",
      description: "Securely link your credit history through our blockchain-verified system."
    },
    {
      number: "02",
      title: "Choose Your Terms",
      description: "Set your leasing terms and reputation stake amount."
    },
    {
      number: "03",
      title: "Match With Borrowers",
      description: "Connect with verified borrowers seeking credit reputation support."
    },
    {
      number: "04",
      title: "Earn Rewards",
      description: "Receive compensation for helping others access better financial terms."
    }
  ];

  return (
    <section className="py-20" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Four simple steps to start transforming lives through credit reputation sharing
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-indigo-600 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-indigo-200 transform -translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}