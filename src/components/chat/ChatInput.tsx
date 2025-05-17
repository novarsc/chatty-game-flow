
import React, { useState } from 'react';
import { Send, Plus } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };
  
  return (
    <div className="p-4 border-t border-white/10">
      <form onSubmit={handleSubmit} className="relative">
        <button 
          type="button"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        >
          <Plus className="h-5 w-5" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="당신의 생각을 입력하세요..."
          className="w-full px-12 py-3 bg-deepThink-surface hover:bg-deepThink-surfaceHover focus:bg-deepThink-surfaceHover text-white 
                     rounded-full border border-white/10 outline-none focus:ring-2 focus:ring-deepThink-primary/50 
                     transition-all duration-300"
        />
        
        <button 
          type="submit"
          disabled={!message.trim()}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-1 
                    ${message.trim() ? 'bg-deepThink-primary text-white' : 'bg-transparent text-gray-400'} 
                    transition-all duration-300 hover:bg-deepThink-accent disabled:opacity-50`}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
