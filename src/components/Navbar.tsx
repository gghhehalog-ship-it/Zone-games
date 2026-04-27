
import React from 'react';
import { Search, Gamepad2, User, Bell } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  onSearch: (query: string) => void;
  onHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch, onHome }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0f1115] border-b border-white/5 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <motion.div 
          onClick={onHome}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <Gamepad2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 tracking-tighter">
            ZONEPLAY
          </span>
        </motion.div>

        <div className="hidden md:flex items-center relative group">
          <Search className="absolute left-3 w-4 h-4 text-gray-400 group-focus-within:text-indigo-400 transition-colors" />
          <input
            type="text"
            placeholder="Search games..."
            onChange={(e) => onSearch(e.target.value)}
            className="bg-[#1a1d23] text-sm text-gray-200 pl-10 pr-4 py-2 rounded-lg border border-white/5 focus:outline-none focus:border-indigo-500/50 w-64 lg:w-96 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#0f1115]"></span>
        </button>
        <button className="flex items-center gap-2 bg-[#1a1d23] hover:bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 transition-all">
          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
            <User className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-sm font-medium text-gray-300">Guest</span>
        </button>
      </div>
    </nav>
  );
};
