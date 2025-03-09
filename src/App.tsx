import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wallet, Shield, Coins, ArrowRight, Gamepad2, Globe, Zap, Lock, Cpu, Boxes, Sparkles, Trophy, Users } from 'lucide-react';
import CryptoTicker from './components/CryptoTicker';

function App() {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [securityRef, securityInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ecosystemRef, ecosystemInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <CryptoTicker />
      
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 text-center relative"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/10 pointer-events-none" />
        <h1 className="text-7xl font-bold mb-6 gradient-text">
          Exodus Web3 Wallet
        </h1>
        <p className="text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          The Ultimate Gaming-First Web3 Wallet for the Next Generation of Digital Assets
        </p>
        <motion.img 
          src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200"
          alt="Exodus Web3 Wallet Gaming Interface"
          className="rounded-2xl neon-border mx-auto max-w-4xl animate-float"
        />
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-bold mb-8 gradient-text text-center">
            Revolutionizing Gaming with Web3 Technology
          </motion.h2>
          <motion.div 
            className="glass-effect p-8 rounded-2xl"
            variants={fadeIn}
          >
            <p className="text-lg mb-6 leading-relaxed">
              The Exodus Web3 Wallet represents a paradigm shift in how gamers interact with digital assets. Built for the future of gaming, our platform seamlessly bridges the gap between traditional gaming and blockchain technology, offering an unparalleled experience for both casual players and professional gamers.
            </p>
            <p className="text-lg leading-relaxed">
              With the Exodus Web3 Wallet, you're not just storing assets – you're stepping into the future of gaming where your digital possessions have real value and utility across multiple gaming universes.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Features Section */}
      <motion.section 
        ref={featuresRef}
        className="py-20 px-4"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Next-Gen Gaming Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--primary)' }}
            >
              <Gamepad2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-primary">GameFi Integration</h3>
              <p className="text-gray-300">
                Connect seamlessly to the latest blockchain games and NFT marketplaces. Experience gaming with real economic value.
              </p>
            </motion.div>

            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--primary)' }}
            >
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Cross-Chain Gaming</h3>
              <p className="text-gray-300">
                Play and trade across multiple gaming ecosystems with one unified wallet interface.
              </p>
            </motion.div>

            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--primary)' }}
            >
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Instant Transactions</h3>
              <p className="text-gray-300">
                Experience lightning-fast transfers optimized for gaming environments.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Security Section */}
      <motion.section
        ref={securityRef}
        className="py-20 px-4"
        initial="hidden"
        animate={securityInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Enterprise-Grade Security
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
            >
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Advanced Protection</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Military-grade encryption for all transactions</span>
                </li>
                <li className="flex items-start">
                  <Cpu className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Hardware security module integration</span>
                </li>
                <li className="flex items-start">
                  <Boxes className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Multi-signature support for team accounts</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
            >
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Smart Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Trophy className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Automated backup and recovery systems</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Social recovery options</span>
                </li>
                <li className="flex items-start">
                  <Lock className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Biometric authentication support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gaming Ecosystem Section */}
      <motion.section
        ref={ecosystemRef}
        className="py-20 px-4"
        initial="hidden"
        animate={ecosystemInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Complete Gaming Ecosystem
          </h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Game Asset Management</h3>
              <ul className="space-y-3">
                <li>• Unified inventory system</li>
                <li>• Cross-game item tracking</li>
                <li>• Real-time value monitoring</li>
                <li>• Automated collection tools</li>
              </ul>
            </motion.div>

            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Trading Features</h3>
              <ul className="space-y-3">
                <li>• Instant P2P trading</li>
                <li>• Automated market making</li>
                <li>• Cross-chain swaps</li>
                <li>• Bulk transfer tools</li>
              </ul>
            </motion.div>

            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Community Tools</h3>
              <ul className="space-y-3">
                <li>• Guild management</li>
                <li>• Team treasury</li>
                <li>• Tournament payouts</li>
                <li>• Social features</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        className="py-20 px-4 relative"
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">
            Power Up Your Gaming Experience
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-primary">For Gamers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Military-grade security for your gaming assets</span>
                </li>
                <li className="flex items-start">
                  <Wallet className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Store game items and currencies in one secure place</span>
                </li>
                <li className="flex items-start">
                  <Coins className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Instant swaps between different game tokens</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={slideIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-primary">For Developers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Easy integration with your blockchain games</span>
                </li>
                <li className="flex items-start">
                  <Wallet className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Robust APIs for seamless wallet connection</span>
                </li>
                <li className="flex items-start">
                  <Coins className="w-6 h-6 text-primary mr-3 mt-1" />
                  <span>Support for multiple gaming chains and standards</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 gradient-text">
            Ready to Level Up Your Web3 Gaming?
          </h2>
          <motion.button
            className="bg-primary text-background px-12 py-6 rounded-full text-2xl font-bold flex items-center mx-auto hover:bg-primary-dark transition-colors neon-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Your Journey <ArrowRight className="ml-2 w-8 h-8" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default App;