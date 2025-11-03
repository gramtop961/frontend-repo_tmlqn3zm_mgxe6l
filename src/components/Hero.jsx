import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CreditCard, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm text-gray-700 backdrop-blur-sm">
          <Shield className="h-4 w-4 text-emerald-600" />
          PCI-grade security built-in
        </div>
        <h1 className="font-geist text-5xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
          The fastest way to launch modern payments
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Zapdm.io is a minimalist fintech platform for digital banking, cards, and e‑commerce.
          Issue cards, move money, and monetize—without the heavy lift.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-black"
          >
            <Rocket className="h-5 w-5" />
            Get started free
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
          >
            <CreditCard className="h-5 w-5" />
            See how it works
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">No credit card required</p>
      </div>
    </section>
  );
};

export default Hero;
