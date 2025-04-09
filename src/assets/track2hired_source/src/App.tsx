import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import ExtensionShowcase from './components/sections/ExtensionShowcase';
import DashboardPreview from './components/sections/DashboardPreview';
import AICapabilities from './components/sections/AICapabilities';
import CallToAction from './components/sections/CallToAction';
import JobTrackingFeature from './components/sections/JobTrackingFeature';
import DashboardFeature from './components/sections/DashboardFeature';
import AIFeature from './components/sections/AIFeature';
import { pageTransition } from './components/ui/Animations';
import './App.css';
import './styles/theme.css';
import './styles/responsive.css';
import './styles/component-responsive.css';

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <Header />
        <main>
          <Hero />
          <Features />
          <JobTrackingFeature />
          <DashboardFeature />
          <AIFeature />
          <CallToAction />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
