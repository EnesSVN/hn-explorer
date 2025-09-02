import { HnHit } from "@/lib/hn";
import Link from "next/link";

export default function StoryCard({ hit }: { hit: HnHit }) {
  const title = hit.title ?? "(no title)";
  const comments = hit.num_comments ?? 0;

  return (
    <article className="border rounded-xl p-4 hover:shadow-sm transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm opacity-70">
        by {hit.author ?? "unknown"} • {hit.points ?? 0} points • {comments}{" "}
        comments
      </p>
      {hit.url && (
        <a
          className="underline"
          href={hit.url}
          target="_blank"
          rel="noreferrer"
        >
          external
        </a>
      )}
      <div>
        <Link className="text-sm underline" href={`/story/${hit.objectID}`}>
          details
        </Link>
      </div>
    </article>
  );
}
