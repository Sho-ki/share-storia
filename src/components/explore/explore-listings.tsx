'use client';

import { useState } from 'react';
import ListingCard from '@/components/ui/cards/listing';
import Button from '@/components/ui/button';
import { DocumentTypes } from '../../types/document';

type Props = {
  documents: DocumentTypes[]
}

export default function ExploreListings({documents}:Props) {
  const [list, setList] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setList((prevList) => prevList + 10);
      setIsLoading(false);
    }, 600);
  }
  return (
    <div>
      <div className="mt-1 grid grid-cols-1 gap-x-5 gap-y-8 xs:grid-cols-2 lg:grid-cols-3 3xl:gap-y-10 4xl:grid-cols-4">
        {documents.slice(0, list).map((item, index) => (
          <ListingCard
            key={`explore-document-${index}`}
            id={`explore-document-${index}`}
            thumbnail={item.thumbnail}
            description={item.description}
            title={item.title}
            slug={item.slug}
            university={item.university}
            faculty={item.faculty}
            price={item.price}
            ratingCount={item.ratingCount}
            rating={item.rating}
          />
        ))}
      </div>
      {documents.length >= list && (
        <Button
          size="xl"
          type="button"
          isLoading={isLoading}
          onClick={() => handleLoadMore()}
          className="relative bottom-0 left-1/2 z-30 mx-auto mt-16 -translate-x-1/2 px-6 py-2.5 md:sticky md:bottom-10 md:text-base xl:relative xl:bottom-0"
        >
          Load more
        </Button>
      )}
    </div>
  );
}
