'use client';

import { chatData } from 'public/data/chatData';
import { useState } from 'react';
import ChatSidebar from '@/components/inbox/chat-sidebar';
import ChatHeader from '@/components/inbox/chat-header';
import ChatInput from '@/components/inbox/chat-input';
import ChatBox from '@/components/inbox/chat-box';
import clsx from 'clsx';
import { useAtom, useSetAtom } from 'jotai';
import { stepAtom, storeAtom } from '../add-listing';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../ui/button';
import { Routes } from '../../../config/routes';
import { useRouter } from 'next/navigation';

type chatDataType = {
  id: Date;
  text: string;
}[];


const StorySchema = z.object({
  stories: z
    .string().array()
});

type StorySchemaType = z.infer<typeof StorySchema>;


export default function CreateStoryPage() {
  const router = useRouter();
  const [chat, setChat] = useState('');
  const [data, setData] = useState<chatDataType>([]);
  const [store, setStore] = useAtom(storeAtom);

  const {
    setValue,
  } = useForm<StorySchemaType>({
    defaultValues: {
      stories: store.stories,
    },
    resolver: zodResolver(StorySchema),
  });


  // handle submit when submit text
  function handleSubmit(e: any) {
    e.preventDefault();
    if (chat === '') {
      return false;
    }

    const response = '123456789'
    setStore({ ...store, stories: [...store.stories, response] });
    setValue('stories', [...store.stories, response])
    
    setData([
      ...data,
      {
        id: new Date(),
        text: response,
      },
    ]);
    setChat('');
  }

    function handleContinue(e: any) {
    e.preventDefault();
    const response = 'abcdefghi'
    setStore({ ...store, stories: [...store.stories, response] });
    setValue('stories', [...store.stories, response])
    
    setData([
      ...data,
      {
        id: new Date(),
        text: response,
      },
    ]);
    setChat('');
  }

    function handleFinish(e: any) {
    e.preventDefault();
    const response = '987654321'
    setStore({ ...store, stories: [...store.stories, response] });
    setValue('stories', [...store.stories, response])

    setData([
      ...data,
      {
        id: new Date(),
        text: response,
      },
    ]);
    setChat('');

  }

  function handleSave(e: any) {
    e.preventDefault();
    console.log(store);
    router.push(Routes.private.listings);
  }

  return (
    <div className="container-fluid w-full py-8 md:py-12 xl:py-16 !flex-grow">
        <div className="flex flex-col pb-2 md:px-5 !flex-grow ">
            <ChatInput
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                onSubmit={handleSubmit}
                onContinue={handleContinue}
                onFinish={handleFinish}
                
            />
            <ChatBox chats={data} />
         
      </div>
      {/* Save button on the right bottom */}
      <div className="flex justify-end">
       <Button
       variant='solid'
       size='lg'
       onClick={handleSave}
        // className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
        >
        Save
        </Button>

       </div> 
    </div>
  );
}
