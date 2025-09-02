import { NextRequest, NextResponse } from "next/server";

const HN_URL = "https://hn.algolia.com/api/v1/search";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "react";
  const page = Number(searchParams.get("page") || 0);

  const url = `${HN_URL}?query=${encodeURIComponent(
    query
  )}&page=${page}&hitsPerPage=10`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ error: "upstream_error" }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "network_error" }, { status: 500 });
  }
}
