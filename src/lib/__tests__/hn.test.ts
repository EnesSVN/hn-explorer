import { searchStories } from "../hn";

describe("searchStories", () => {
  it("returns parsed data", async () => {
    const res = await searchStories("react");
    expect(res.hits[0].title).toMatch(/Sample for react/);
  });

  it("throws on non-200", async () => {
    await expect(searchStories("error")).rejects.toThrow(/Search failed/);
  });
});
