export type HnHit = {
  objectID: string;
  title: string | null;
  url: string | null;
  points: number | null;
  author: string | null;
  num_comments: number | null;
};

export type HnSearchResponse = {
  hits: HnHit[];
  page: number;
  nbPages: number;
};

export async function searchStories(
  query: string,
  page = 0
): Promise<HnSearchResponse> {
  const res = await fetch(
    `/api/hn/search?query=${encodeURIComponent(query)}&page=${page}`
  );
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  return (await res.json()) as HnSearchResponse;
}

export type HnItem = {
  id: number;
  title: string | null;
  points: number | null;
  author: string | null;
  children?: Array<{ id: number; author: string | null; text: string | null }>;
};

export async function getItem(id: string): Promise<HnItem> {
  const res = await fetch(`https://hn.algolia.com/api/v1/items/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Item failed: ${res.status}`);
  return (await res.json()) as HnItem;
}
