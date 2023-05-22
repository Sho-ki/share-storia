'use client';
import { useEffect, useRef } from 'react';

interface ShowChats {
  chats?: any[];
}

export default function ChatBox({ chats }: ShowChats) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats]);

  return (
    <div className="max-h-[374px] flex-grow overflow-y-auto md:max-h-[478px]">
      {chats?.map((item, index) => (
        <div
          key={item.id}
          className={`my-2 transform transition-transform duration-500 ${
            chats.length - 1 === index ? 'rotate-0' : ''
          }`}
        >
          <p className="inline-block rounded-full bg-yellow-100 px-5 py-3 text-sm text-gray-700 md:text-base shadow-lg">
            {item.text}
          </p>
        </div>
      ))}
      <div ref={scrollRef} />
    </div>
  );
}
