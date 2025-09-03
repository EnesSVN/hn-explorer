import { render, screen } from "@testing-library/react";
import StoryCard from "../StoryCard";

test("renders details link to story page", () => {
  render(
    <StoryCard
      hit={{
        objectID: "123",
        title: "Hello",
        url: null,
        points: 1,
        author: "a",
        num_comments: 0,
      }}
    />
  );

  const link = screen.getByRole("link", { name: /details/i });
  expect(link).toHaveAttribute("href", "/story/123");
});
