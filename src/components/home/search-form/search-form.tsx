'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { makeQueryString } from '@/utils/makeQueryString';

import DocumentInput from '@/components/home/search-form/document-input';
// import SearchAutocomplete from '@/components/ui/search-autocomplete';
// import { MapMarkerIcon } from '@/components/icons/map-marker';
// import { CalenderIcon } from '@/components/icons/calender';
import Text from '@/components/ui/typography/text';
import Button from '@/components/ui/button';
import { Routes } from '@/config/routes';
import { DocumentIcon } from '@heroicons/react/24/solid';

// import { LogoIcon } from '@/components/icons/logo';

type QueryStringType = {
  q: string;
};

export default function FindStoryForm() {
  const router = useRouter();
  const [documentInput, setDocumentInput] = useState({
    searchedDocument: '',
  });

 
 
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    let queryString = '';
    const queryObj: QueryStringType = {
      q: documentInput.searchedDocument,
    };
    queryString = makeQueryString(queryObj);
    
    router.push(`${Routes.private.addListing}?${queryString}`);

  };

  return (
    <form
      noValidate
      onSubmit={handleFormSubmit}
      className="relative z-[2] w-full max-w-[450px] rounded-lg bg-white p-6 shadow-2xl sm:m-0 sm:max-w-[380px] sm:p-7 sm:pt-9 md:max-w-[400px] md:shadow-none lg:rounded-xl xl:max-w-[460px] xl:p-9 4xl:max-w-[516px] 4xl:p-12"
    >
      <div className="mb-3 sm:mb-0">
        <span className="mb-2 hidden font-satisfy text-xl leading-7 text-gray-dark sm:block 4xl:text-[28px] 4xl:leading-[44px]">
          
        </span>
        <Text
          tag="h1"
          className="leading-12 mb-2 !text-xl !font-black uppercase text-gray-dark sm:!text-[28px] sm:!leading-9  4xl:!text-4xl 4xl:!leading-[52px]"
        >
          Create your <br className="hidden sm:block" />
          favorite story
        </Text>
        <Text className="mb-5 hidden leading-6 !text-secondary sm:block 3xl:leading-8 4xl:mb-6 4xl:text-lg">
          Type your theme or character names 
        </Text>
      </div>
      
      <Button
        type="submit"
        className="text-white font-bold py-2 px-4 rounded w-full !py-[14px] text-sm !font-bold uppercase leading-6 md:!py-[17px] md:text-base lg:!rounded-xl 3xl:!py-[22px] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
        rounded="lg"
        size="xl"
      >
        Start your story
      </Button>
      
    </form>
  );
}
