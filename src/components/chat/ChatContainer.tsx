
import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage, { MessageRole } from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
  role: MessageRole;
  content: string;
  timestamp: string;
}

const SAMPLE_MESSAGES: Message[] = [
  {
    role: 'ai',
    content: '안녕하세요! Deep Thinker에 오신 것을 환영합니다. 토론을 시작할 주제를 알려주세요.',
    timestamp: '12:00'
  },
  {
    role: 'user',
    content: '인공지능이 인간의 창의성을 완전히 대체할 수 있을까요?',
    timestamp: '12:01'
  },
  {
    role: 'ai',
    content: '흥미로운 질문입니다. 인공지능은 패턴을 학습하고 기존 데이터를 기반으로 새로운 것을 생성할 수 있지만, 인간의 경험, 감정, 직관에서 오는 창의성은 아직 완전히 모방하기 어렵습니다. 더 자세한 생각이 있으신가요?',
    timestamp: '12:02'
  }
];

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle sending a message
  const handleSendMessage = (content: string) => {
    const newUserMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
      const aiResponse: Message = {
        role: 'ai',
        content: `당신의 의견에 대해 생각해볼 가치가 있습니다. "${content}"에 관해 더 깊이 탐구해보고 싶습니다. 이 주제에 대한 추가적인 생각이 있으신가요?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col h-screen bg-deepThink-dark bg-cyber-grid bg-fixed">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto scrollbar-none p-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <ChatMessage 
              key={index}
              role={message.role}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
          
          {isTyping && (
            <ChatMessage 
              role="ai"
              content=""
              isTyping={true}
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
