'use client';

import { atomWithStorage } from 'jotai/utils';
import { atom, useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';

const CreateListing = dynamic(
  () => import('@/components/add-listing/steps/create-listing')
);
const BoatInfo = dynamic(
  () => import('@/components/add-listing/steps/boat-info')
);
const AddBoatPhotos = dynamic(
  () => import('@/components/add-listing/steps/upload-photos')
);
const GenerateStory = dynamic(
  () => import('@/components/add-listing/steps/generate-story')
);
const AddEquipment = dynamic(
  () => import('@/components/add-listing/steps/add-equipment')
);
const AddSpecification = dynamic(
  () => import('@/components/add-listing/steps/add-specification')
);
const StepsEnd = dynamic(
  () => import('@/components/add-listing/steps/steps-end')
);

export const stepAtom = atom(1);
export const storeAtom = atomWithStorage('addNewStory', {
  minutes: 5,
  keywords: '',
  age:3,
  beginningWords: '',
  endingWords: '',
  theme: '',
  stories: [] as string[],
});

export default function AddListing() {
  let stepComponent;
  const step = useAtomValue(stepAtom);
  switch (step) {
    case 1:
      stepComponent = <CreateListing />;
      break;
    case 2:
      stepComponent = <BoatInfo />;
      break;
    // case 3:
    //   stepComponent = <AddBoatPhotos />;
    //   break;
    case 3:
      stepComponent = <StepsEnd />;
      break;
    case 4:
      stepComponent = <GenerateStory />;
      break;
    // case 5:
    //   stepComponent = <AddEquipment />;
    //   break;
    // case 6:
    //   stepComponent = <AddSpecification />;
    //   break;

  }

  return (
    <div className={`flex px-4 pb-24 pt-10 ${step !== 4?'flex-grow items-center justify-center':''}`}>
      {stepComponent}
    </div>
  );
}
