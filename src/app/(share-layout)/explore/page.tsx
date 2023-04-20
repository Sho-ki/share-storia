import ExploreListings from '@/components/explore/explore-listings';
import FilterTopbar from '@/components/explore/filter-topbar';
import Filter from '@/components/explore/filter';
import { get_ } from '../../../hooks/use-http-request';
import { DocumentTypes } from '../../../types/document';

type Props = {
  searchParams: {
    q: string
  }
}

const dummy: DocumentTypes[] = [
  {
    id: 1,
    title: "Introduction to Psychology",
    description: "A comprehensive guide to understanding human behaivor and mental processes.",
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

const getDocument = async (q:string) => {
  // ここでbackendのAPIを叩くけど、まだできてないからdummyを返す
  // const documents = await get_<DocumentTypes[]>('/api/resumate/documents?document=' + q);
  // if(!documents) return { documents: [] };

  return { documents: dummy };
}

export default async function ExplorePage({searchParams: { q }}: Props) {
  const {documents} = await getDocument(q)

  return (
    <div className="container-fluid mb-12 pt-6 lg:mb-16">
      <FilterTopbar />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[330px_5fr] 3xl:gap-12">
        <Filter className="hidden xl:block" />
        <ExploreListings documents={documents} />
      </div>
    </div>
  );
}
