import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/hn/search", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("query") ?? "react";

    if (q === "error") {
      return HttpResponse.json({ error: "forced" }, { status: 500 });
    }

    return HttpResponse.json({
      hits: [
        {
          objectID: "1",
          title: `Sample for ${q}`,
          url: null,
          points: 10,
          author: "tester",
          num_comments: 5,
        },
      ],
      page: 0,
      nbPages: 1,
    });
  }),
];
