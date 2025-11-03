import React from 'react';
import { CreditCard, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Card issuing',
    desc: 'Create virtual and physical cards with real-time controls and Apple/Google Pay support.'
  },
  {
    icon: Zap,
    title: 'Instant settlement',
    desc: 'Move money in seconds with transparent pricing and no hidden fees.'
  },
  {
    icon: Shield,
    title: 'Compliance built-in',
    desc: 'KYC/KYB, AML screening, and dispute tooling handled out of the box.'
  },
  {
    icon: Globe,
    title: 'Global by default',
    desc: 'Multi-currency accounts, FX at great rates, and cross-border readiness.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-geist text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Everything you need to ship payments
        </h2>
        <p className="mt-3 text-gray-600">
          A focused toolkit for fintechs and e‑commerce to build, test, and scale.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="mb-3 inline-flex rounded-xl bg-gray-100 p-3 text-gray-900">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
