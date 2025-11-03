import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gray-900" />
            <span className="font-geist text-lg font-semibold">zapdm.io</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#" className="hover:text-gray-900">Docs</a>
            <a href="#" className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-gray-50">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
