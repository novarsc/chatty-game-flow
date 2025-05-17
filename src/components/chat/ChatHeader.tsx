
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Settings, Bell } from 'lucide-react';

const ChatHeader: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex items-center justify-between w-full p-4 border-b border-white/10">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-deepThink-primary to-deepThink-accent flex items-center justify-center animate-pulse-slow">
            <span className="text-lg font-bold text-white">DT</span>
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-deepThink-dark"></span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-deepThink-primary to-deepThink-accent animate-gradient-shift">
            Deep Thinker
          </h1>
          <p className="text-xs text-gray-400">토론 및 논리 대화</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
          <Bell className="h-5 w-5 text-gray-400" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
          <Settings className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
