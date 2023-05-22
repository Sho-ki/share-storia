'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Input from '@/components/ui/form-fields/input';
import ActionIcon from '@/components/ui/action-icon';
import Button from '../ui/button';

interface ChatInputType {
  value: string;
  onChange: (e: any) => void;
  onSubmit?: (data: any) => void;
  onContinue?: (data: any) => void;
  onFinish?: (data: any) => void;
}

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  onContinue,
  onFinish,
}: ChatInputType) {
  return (
    <div className="border-t border-gray-lighter pt-2 xl:pt-3">
      <form noValidate onSubmit={onSubmit} className="relative">
        <Input
          type="text"
          value={value}
          variant="outline"
          placeholder="Type your message..."
          className="rounded-lg border-gray-lighter"
          inputClassName="pr-16 pl-2 md:pl-4 lg:pr-24"
          onChange={onChange}
        />
        <ActionIcon
          onClick={onSubmit}
          className="absolute inset-y-0 right-0 top-0 !h-full w-14 cursor-pointer rounded-none rounded-r-lg text-white lg:w-20"
        >
          <PaperAirplaneIcon className="h-auto w-5" />
        </ActionIcon>
      </form>
      <div className="flex items-center mt-2">
        <Button
          type='button'
          value={'Continue'}
          variant="outline"
          className="rounded-lg border-gray-lighter mr-2 px-4 py-2 bg-blue-500 rounded-lg"
          onClick={onContinue}
        >
        Continue
        </Button>
       
        <Button
          type='button'
          value={'Finish'}
          variant="outline"
          className="rounded-lg border-gray-lighter mr-2 px-4 py-2 bg-red-500 rounded-lg"
          onClick={onFinish}
        >
        Finish
        </Button>
       
        </div>
    </div>
  );
}
