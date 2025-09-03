import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/hn/search", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("query") ?? "react";
    const page = Number(url.searchParams.get("page") ?? "0");

    if (q === "error") {
      return HttpResponse.json({ error: "forced" }, { status: 500 });
    }

    const title =
      page === 0
        ? `Sample for ${q} (p0)`
        : page === 1
        ? `Sample for ${q} (p1)`
        : `Sample for ${q} (p${page})`;

    return HttpResponse.json({
      hits: [
        {
          objectID: `${page}-1`,
          title,
          url: null,
          points: 10 + page,
          author: "tester",
          num_comments: 5 + page,
        },
      ],
      page,
      nbPages: 10,
    });
  }),
];
