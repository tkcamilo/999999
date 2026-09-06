/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { ProductHero } from './components/ProductHero';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { KitBreakdown } from './components/KitBreakdown';
import { ComparisonTable } from './components/ComparisonTable';
import { CustomerReviews } from './components/CustomerReviews';
import { FAQSection } from './components/FAQSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToCheckout = () => {
    const formElement = document.getElementById('checkout-offer-box');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
      {/* Header & Urgent Announcement */}
      <Header onOrderClick={scrollToCheckout} />

      {/* Main Product Page Content */}
      <main className="flex-1">
        {/* Hero Section with Integrated Single-Page WhatsApp Checkout */}
        <ProductHero />

        {/* 4D Technology & Body Zones Showcase */}
        <FeaturesShowcase />

        {/* Unboxing & What's In The Box */}
        <KitBreakdown onOrderClick={scrollToCheckout} />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Verified Customer Reviews & Review Submission */}
        <CustomerReviews />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Floating Bottom Sticky Bar */}
      <StickyBottomBar onOrderClick={scrollToCheckout} />

      {/* Footer with Contact & Legal details */}
      <Footer />
    </div>
  );
}
