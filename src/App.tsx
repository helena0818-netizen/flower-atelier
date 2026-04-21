/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import { Signature, BestBouquet } from './components/BouquetSections';
import { Occasions, OrderProcess } from './components/InteractionSections';
import { Reviews, FAQ, Contact, Footer, FloatingCTA } from './components/InfoSections';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent/10 selection:text-brand-accent">
      <Header />
      <main>
        <Hero />
        <Signature />
        <BestBouquet />
        <Occasions />
        <OrderProcess />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
