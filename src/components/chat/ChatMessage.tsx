
import React from 'react';
import { cn } from '@/lib/utils';

export type MessageRole = 'user' | 'ai';

interface ChatMessageProps {
  role: MessageRole;
  content: string;
  username?: string;
  timestamp?: string;
  isTyping?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  role, 
  content, 
  username = role === 'user' ? '당신' : 'Deep Thinker', 
  timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  isTyping = false
}) => {
  const isUser = role === 'user';
  
  return (
    <div className={cn(
      "flex w-full my-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "flex flex-col max-w-[80%]",
        isUser ? "items-end" : "items-start"
      )}>
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-sm text-gray-400">{username}</span>
          {!isUser && (
            <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-deepThink-accent/30 text-white">
              AI
            </span>
          )}
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
        
        <div className={cn(
          "rounded-2xl p-4 shadow-lg",
          isUser ? 
            "message-bubble-user rounded-tr-none" : 
            "message-bubble-ai rounded-tl-none"
        )}>
          {isTyping ? (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <p className="whitespace-pre-wrap">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
