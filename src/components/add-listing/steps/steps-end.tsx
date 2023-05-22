'use client';

import Confetti from 'react-confetti';
import { Routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useWindowsize } from '@/hooks/use-window-size';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import { useAtom, useSetAtom } from 'jotai';
import { stepAtom, storeAtom } from '../add-listing';
import router from 'next/router';
import CreateListingFooter from '../../footer/create-listing-footer';

export default function StepsEnd() {
  const setStep = useSetAtom(stepAtom);
  const { width, height } = useWindowsize();
  // const mounted = useIsMounted();
  const [store, setStore] = useAtom(storeAtom);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStep(4)
  }


  return (
    <>
      <div className="flex w-full max-w-[648px] flex-col items-center justify-center gap-6">
        <CheckCircleIcon className="h-auto w-24 text-gray-dark/40" />
        <Text tag="h5" className="text-gray-dark">
          Now, let's start creating your story
        </Text>
        <Button
          size="lg"
          className="tracking-wider"
          onClick={handleSubmit}
        >
          Start
        </Button>
      </div>
      <CreateListingFooter onBack={() => setStep(2)} hasNext={false} />
      {/* {mounted && (
        <Confetti width={width - 20} height={height - 10} className="mx-auto" />
      )} */}
    </>
  );
}
