"use client";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { HnHit, searchStories } from "@/lib/hn";
import { useEffect, useMemo, useState } from "react";
import StoryCard from "./StoryCard";

export default function StoryList() {
  const [rawQ, setRawQ] = useState("react");
  const q = useDebouncedValue(rawQ, 300);

  const [hits, setHits] = useState<HnHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    searchStories(q)
      .then((res) => {
        if (!active) return;
        setHits(res.hits);
      })
      .catch((e) => active && setError(e.message))
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, [q]);

  const content = useMemo(() => {
    if (loading) return <p role="status">Loading...</p>;
    if (error) return <p role="alert">Error: {error}</p>;
    if (!hits.length) return <p>No results</p>;
    return (
      <ul className="grid gap-3">
        {hits.map((h) => (
          <li key={h.objectID}>
            <StoryCard hit={h} />
          </li>
        ))}
      </ul>
    );
  }, [loading, error, hits]);

  return (
    <div className="space-y-4">
      <label htmlFor="q" className="block text-sm">
        Query
      </label>
      <input
        id="q"
        aria-label="Search"
        placeholder="Search Hacker News..."
        className="border rounded px-3 py-2 w-full"
        value={rawQ}
        onChange={(e) => setRawQ(e.target.value)}
      />
      {content}
    </div>
  );
}
