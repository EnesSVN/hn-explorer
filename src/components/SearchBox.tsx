"use client";

import { useState } from "react";

export default function SearchBox({
  onChange,
}: {
  onChange: (q: string) => void;
}) {
  const [q, setQ] = useState("");

  return (
    <div className="flex gap-2 items-center">
      <input
        aria-label="Search"
        placeholder="Search Hacker News..."
        className="border rounded px-3 py-2 w-full"
        value={q}
        onChange={(e) => {
          const v = e.target.value;
          setQ(v);
          onChange(v);
        }}
      />
    </div>
  );
}
