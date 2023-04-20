'use client';

import { topBoats } from '../../../public/data/top-boats';
import { useTimeout } from '@/hooks/use-timeout';
import ListingCardLoader from '@/components/ui/loader/listing-card-loader';
import ListingCard from '@/components/ui/cards/listing';
import SeeMore from '@/components/ui/see-more';
import Section from '@/components/ui/section';
import { DocumentTypes } from '../../types/document';

const dummy: DocumentTypes[] = [
  {
    id: 1,
    title: "Introduction to Psychology",
    description: "A comprehensive guide to understanding human behavior and mental processes.",
    thumbnail: "https://source.unsplash.com/960x640/?school",
    university: "Harvard University",
    faculty: "Faculty of Arts and Sciences",
    slug: "introduction-to-psychology",
    price: "FREE",
    rating: 4.5,
    ratingCount: "1000",
    // userAvatar: "https://example.com/avatars/user1.jpg"
  },
  {
    id: 2,
    title: "Data Science and Machine Learning Bootcamp",
    description: "Learn data science, machine learning, and deep learning in this comprehensive course.",
    thumbnail: "https://source.unsplash.com/960x640/?school",
    university: "Stanford University",
    faculty: "School of Engineering",
    slug: "data-science-machine-learning-bootcamp",
    price: "FREE",
    rating: 4.7,
    ratingCount: "5000",
    // userAvatar: "https://example.com/avatars/user2.jpg"
  },
  {
    id: 3,
    title: "Introduction to Philosophy",
    description: "Explore the fundamental questions of human existence and the nature of reality.",
    thumbnail: "https://source.unsplash.com/960x640/?school",
    university: "University of Oxford",
    faculty: "Faculty of Philosophy",
    slug: "introduction-to-philosophy",
    price: "FREE",
    rating: 4.3,
    ratingCount: "1500",
    // userAvatar: "https://example.com/avatars/user3.jpg"
  }
];

function DocumentGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-y-10">
      {dummy.slice(0, 8).map((item, index) => (
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
  );
}

export default function TopBoats() {
  const { state } = useTimeout();

  return (
    <Section
      className="group/section container-fluid mt-12 overflow-hidden lg:mt-16"
      title="Top boat rentals"
      description="Unsatiable it considered invitation he traveling insensible."
      headerClassName="items-end mb-4 md:mb-5 xl:mb-6 gap-5"
      rightElement={<SeeMore />}
    >
      {!state && <ListingCardLoader />}
      {state && <DocumentGrid />}
    </Section>
  );
}
