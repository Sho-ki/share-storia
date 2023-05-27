import ExploreListings from '@/components/explore/explore-listings';
import FilterTopbar from '@/components/explore/filter-topbar';
import Filter from '@/components/explore/filter';
import { get_ } from '../../../hooks/use-http-request';
import { StoryTypes } from '../../../types/story';

type Props = {
  searchParams: {
    q: string
  }
}

const dummy: StoryTypes[] = [
  {
    id: 1,
    title: "Introduction to Psychology",
    description: "A comprehensive guide to understanding human behaivor and mental processes.",
    thumbnail: "https://source.unsplash.com/960x640/?school",
    category: "Faculty of Arts and Sciences",
    slug: "introduction-to-psychology",
    rating: 4.5,
    ratingCount: "1000",
    // userAvatar: "https://example.com/avatars/user1.jpg"
  },
  {
    id: 2,
    title: "Data Science and Machine Learning Bootcamp",
    description: "Learn data science, machine learning, and deep learning in this comprehensive course.",
    thumbnail: "https://source.unsplash.com/960x640/?school",
    category: "School of Engineering",
    slug: "data-science-machine-learning-bootcamp",
    rating: 4.7,
    ratingCount: "5000",
    // userAvatar: "https://example.com/avatars/user2.jpg"
  },
  {
    id: 3,
    title: "Introduction to Philosophy",
    description: "Explore the fundamental questions of human existence and the nature of reality.",
    thumbnail: "https://source.unsplash.com/960x640/?school",
    category: "University of Oxford",
    slug: "introduction-to-philosophy",
    rating: 4.3,
    ratingCount: "1500",
    // userAvatar: "https://example.com/avatars/user3.jpg"
  }
];

const getDocument = async (q:string) => {
  // ここでbackendのAPIを叩くけど、まだできてないからdummyを返す
  // const stories = await get_<StoryTypes[]>('/api/resumate/stories?document=' + q);
  // if(!stories) return { stories: [] };

  return { stories: dummy };
}

export default async function ExplorePage({searchParams: { q }}: Props) {
  const {stories} = await getDocument(q)

  return (
    <div className="container-fluid mb-12 pt-6 lg:mb-16">
      <FilterTopbar />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[330px_5fr] 3xl:gap-12">
        <Filter className="hidden xl:block" />
        <ExploreListings story={stories} />
      </div>
    </div>
  );
}
