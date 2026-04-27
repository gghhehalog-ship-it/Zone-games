/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { GameView } from './components/GameView';
import { Game } from './data';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-100 selection:bg-indigo-500/30">
      <Navbar 
        onSearch={setSearchQuery} 
        onHome={() => setSelectedGame(null)} 
      />
      
      <main>
        <AnimatePresence mode="wait">
          {!selectedGame ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Home 
                searchQuery={searchQuery} 
                onGameSelect={setSelectedGame} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="game"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <GameView 
                game={selectedGame} 
                onBack={() => setSelectedGame(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <footer className="py-12 px-6 border-t border-white/5 bg-[#0f1115] relative z-10 transition-all">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="text-xl font-black italic tracking-tighter text-white">ZONEPLAY</span>
            <p className="text-sm text-gray-500 max-w-xs">
              Powered by Google AI Studio. The ultimate destination for web games.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Contact Support</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Developers</a>
          </div>
          <div className="flex gap-4">
             <div className="w-10 h-10 bg-[#1a1d23] rounded-lg border border-white/5 flex items-center justify-center hover:border-indigo-500/30 transition-all cursor-pointer">
                <span className="text-sm text-gray-400">TW</span>
             </div>
             <div className="w-10 h-10 bg-[#1a1d23] rounded-lg border border-white/5 flex items-center justify-center hover:border-indigo-500/30 transition-all cursor-pointer">
                <span className="text-sm text-gray-400">IG</span>
             </div>
             <div className="w-10 h-10 bg-[#1a1d23] rounded-lg border border-white/5 flex items-center justify-center hover:border-indigo-500/30 transition-all cursor-pointer">
                <span className="text-sm text-gray-400">DC</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
