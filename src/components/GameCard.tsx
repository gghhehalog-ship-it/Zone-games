
import React from 'react';
import { Game } from '../data';
import { Play, Star, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(game)}
      className="group bg-[#16191e] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16191e] via-transparent to-transparent opacity-60" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/40 transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="text-white fill-white ml-1 w-6 h-6" />
          </div>
        </div>

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
            {game.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-100 group-hover:text-indigo-400 transition-colors line-clamp-1">
            {game.title}
          </h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3 h-3 fill-amber-500" />
            <span className="text-xs font-bold">{game.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-gray-400">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span className="text-[11px]">{game.playCount}</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full" />
          <span className="text-[11px]">Free to Play</span>
        </div>
      </div>
    </motion.div>
  );
};
