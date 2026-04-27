
import React, { useState, useMemo } from 'react';
import { GAMES, Game, Category } from '../data';
import { CategoryBar } from './CategoryBar';
import { GameCard } from './GameCard';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, TrendingUp } from 'lucide-react';

interface HomeProps {
  searchQuery: string;
  onGameSelect: (game: Game) => void;
}

export const Home: React.FC<HomeProps> = ({ searchQuery, onGameSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredGame = GAMES[0];

  return (
    <div className="pt-24 pb-12 px-6 max-w-[1600px] mx-auto min-h-screen">
      {/* Hero Section */}
      {!searchQuery && selectedCategory === 'All' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 group cursor-pointer border border-white/5 shadow-2xl"
          onClick={() => onGameSelect(featuredGame)}
        >
          <img
            src={featuredGame.thumbnail}
            alt={featuredGame.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/40 to-transparent" />
          
          <div className="absolute bottom-12 left-12 max-w-2xl">
            <div className="flex items-center gap-2 text-indigo-400 mb-4 bg-indigo-400/10 w-fit px-3 py-1 rounded-full border border-indigo-400/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase">Featured Release</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-tight italic">
              {featuredGame.title.toUpperCase()}
            </h1>
            <p className="text-gray-300 text-lg mb-8 line-clamp-2 max-w-xl">
              {featuredGame.description}
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-white/90 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95 shadow-xl">
                PLAY NOW FREE
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10">
                View Details
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content Area */}
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
              <TrendingUp className="text-indigo-400 w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Discover Games</h2>
              <p className="text-gray-500 text-sm">Find your next favorite title</p>
            </div>
          </div>
          <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} onClick={onGameSelect} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredGames.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-gray-800/30 rounded-3xl flex items-center justify-center mb-6 border border-white/5">
              <Sparkles className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No games found</h3>
            <p className="text-gray-500 max-w-sm">
              We couldn't find any games matching "{searchQuery}". Try different keywords or categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
