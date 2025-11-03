import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-center sm:flex-row sm:text-left">
        <div>
          <div className="text-lg font-semibold text-gray-900">zapdm.io</div>
          <p className="mt-1 text-sm text-gray-600">Minimalist payments infrastructure for modern businesses.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#" className="hover:text-gray-900">Docs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
