import StoryDetailClient from "./StoryDetailClient";

export default function StoryPage({ params }: { params: { id: string } }) {
  return <StoryDetailClient id={params.id} />;
}
