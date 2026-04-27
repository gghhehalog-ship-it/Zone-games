
import React from 'react';
import { CATEGORIES, Category } from '../data';
import { motion } from 'motion/react';

interface CategoryBarProps {
  selected: Category | 'All';
  onSelect: (category: Category | 'All') => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({ selected, onSelect }) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect('All')}
        className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap border ${
          selected === 'All'
            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20'
            : 'bg-[#1a1d23] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
        }`}
      >
        🔥 All Games
      </motion.button>
      {CATEGORIES.map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap border ${
            selected === cat
              ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20'
              : 'bg-[#1a1d23] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
};
