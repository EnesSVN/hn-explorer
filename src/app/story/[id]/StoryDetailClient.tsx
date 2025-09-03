"use client";
import { useEffect, useState } from "react";

type HnItem = {
  id: number;
  title: string | null;
  points: number | null;
  author: string | null;
  children?: Array<{ id: number; author: string | null; text: string | null }>;
};

export default function StoryDetailClient({ id }: { id: string }) {
  const [data, setData] = useState<HnItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    fetch(`/api/hn/item/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error(`Item failed: ${r.status}`);
        return r.json();
      })
      .then((json) => active && setData(json))
      .catch((e) => active && setError(e.message))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) return <p role="status">Loading...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">{data?.title ?? "(no title)"}</h1>
      <p className="opacity-70 text-sm">
        by {data?.author ?? "unknown"} • {data?.points ?? 0} points
      </p>
      <section className="space-y-2">
        <h2 className="font-semibold">Comments</h2>
        {data?.children && data.children.length > 0 ? (
          <ul className="space-y-2">
            {data.children.slice(0, 5).map((c) => (
              <li key={c.id} className="border-l pl-3">
                <p className="text-sm">
                  <span className="font-medium">{c.author ?? "anon"}: </span>
                  <span dangerouslySetInnerHTML={{ __html: c.text ?? "" }} />
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments</p>
        )}
      </section>
    </main>
  );
}
