import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    caption: 'Pay as you grow',
    features: ['No monthly fees', '0.8% + 10¢ per card tx', 'Instant payouts', 'Email support'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Scale',
    price: '$299',
    caption: 'Everything in Starter +',
    features: ['Interchange optimization', 'Dedicated sandbox', 'Priority support', 'Volume discounts'],
    cta: 'Contact sales',
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-geist text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-gray-600">Fair rates with zero lock‑in. Upgrade when you need more firepower.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border ${tier.highlight ? 'border-gray-900' : 'border-gray-200'} bg-white p-6 shadow-sm`}
          >
            {tier.highlight && (
              <span className="absolute -top-3 left-6 rounded-full border border-gray-900 bg-white px-3 py-1 text-xs font-medium text-gray-900">
                Most popular
              </span>
            )}
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{tier.caption}</p>
              </div>
              <div className="text-4xl font-semibold text-gray-900">{tier.price}<span className="text-base font-normal text-gray-500">/mo</span></div>
            </div>
            <ul className="mt-6 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />{f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition ${tier.highlight ? 'bg-gray-900 text-white hover:bg-black' : 'border border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50'}`}
              >
                {tier.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
