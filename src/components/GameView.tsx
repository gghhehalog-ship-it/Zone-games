
import React from 'react';
import { Game } from '../data';
import { ArrowLeft, Maximize2, Share2, ThumbsUp, MessageSquare, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface GameViewProps {
  game: Game;
  onBack: () => void;
}

export const GameView: React.FC<GameViewProps> = ({ game, onBack }) => {
  return (
    <div className="min-h-screen bg-[#0a0c10] pt-20 px-6">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Games
      </motion.button>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="relative bg-black rounded-2xl overflow-hidden border border-white/5 aspect-video shadow-2xl">
            <iframe
              src={game.embedUrl}
              className="w-full h-full border-none"
              allowFullScreen
              title={game.title}
            />
            
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="p-2 bg-black/60 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-all border border-white/10">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 bg-[#16191e] rounded-2xl p-6 border border-white/5">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{game.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full font-medium">
                    {game.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{game.rating * 20}k Likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>724 Comments</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20">
                  <ThumbsUp className="w-5 h-5" />
                  Like
                </button>
                <button className="flex items-center gap-2 bg-[#1a1d23] hover:bg-white/5 text-gray-300 px-4 py-2.5 rounded-xl font-medium border border-white/5 transition-all">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                {game.description}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#16191e] rounded-2xl p-5 border border-white/5">
            <h2 className="text-lg font-bold text-white mb-4">Chat with Friends</h2>
            <div className="space-y-4 h-96 overflow-y-auto mb-4 border-b border-white/5 pb-4 scrollbar-hide">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-indigo-400">GamerPro99</p>
                  <p className="text-sm text-gray-300">Who wants to join my lobby?</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-purple-400">ShadowNinja</p>
                  <p className="text-sm text-gray-300">GG! This game is insane.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-green-400">PlayerOne</p>
                  <p className="text-sm text-gray-300">Ready for a rematch!</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full bg-[#1a1d23] text-sm text-gray-200 pl-4 pr-10 py-3 rounded-xl border border-white/5 focus:outline-none focus:border-indigo-500/50 transition-all"
              />
              <button className="absolute right-3 top-3 text-indigo-500 hover:text-indigo-400">
                <Play className="w-4 h-4 fill-indigo-500" />
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-2">Join Discord</h3>
            <p className="text-white/80 text-sm mb-4">Connect with thousands of gamers and join tournaments!</p>
            <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-white/90 transition-all shadow-lg">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
