import StoryList from "@/components/StoryList";

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold" role="heading" aria-level={1}>
        HN Explorer
      </h1>
      <p className="opacity-70 text-sm">Search Hacker News stories.</p>
      <StoryList />
    </main>
  );
}
