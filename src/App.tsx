/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductHero } from './components/ProductHero';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { KitBreakdown } from './components/KitBreakdown';
import { ComparisonTable } from './components/ComparisonTable';
import { CustomerReviews } from './components/CustomerReviews';
import { FAQSection } from './components/FAQSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';
import { BUNDLE_OPTIONS, KIWIFY_CHECKOUT_URLS } from './data/productData';
import { BundleOption } from './types';

export default function App() {
  // Option 2x selected by default
  const [selectedBundle, setSelectedBundle] = useState<BundleOption>(BUNDLE_OPTIONS[1]);

  const handleCheckout = () => {
    const targetUrl =
      selectedBundle.checkoutUrl ||
      KIWIFY_CHECKOUT_URLS[selectedBundle.units] ||
      'https://pay.kiwify.com.br/iS4g0bJ';
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
      {/* Header & Urgent Announcement */}
      <Header onOrderClick={handleCheckout} />

      {/* Main Product Page Content */}
      <main className="flex-1">
        {/* Hero Section with Options and Checkout Button */}
        <ProductHero
          selectedBundle={selectedBundle}
          onSelectBundle={setSelectedBundle}
        />

        {/* 4D Technology & Body Zones Showcase */}
        <FeaturesShowcase />

        {/* Unboxing & What's In The Box */}
        <KitBreakdown onOrderClick={handleCheckout} />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Verified Customer Reviews & Review Submission */}
        <CustomerReviews />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Floating Bottom Sticky Bar */}
      <StickyBottomBar
        selectedBundle={selectedBundle}
        onOrderClick={handleCheckout}
      />

      {/* Footer with Contact & Legal details */}
      <Footer />
    </div>
  );
}
