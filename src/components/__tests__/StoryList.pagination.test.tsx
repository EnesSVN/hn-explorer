import { render, screen, fireEvent } from "@testing-library/react";
import StoryList from "../StoryList";

describe("StoryList pagination", () => {
  it("moves to next/prev pages and shows different results", async () => {
    render(<StoryList />);

    expect(
      await screen.findByText(/Sample for react \(p0\)/i)
    ).toBeInTheDocument();

    const nextBtn = screen.getByRole("button", { name: /Next Page/i });
    fireEvent.click(nextBtn);
    expect(
      await screen.findByText(/Sample for react \(p1\)/i)
    ).toBeInTheDocument();

    const prevBtn = screen.getByRole("button", { name: /Prev Page/i });
    fireEvent.click(prevBtn);
    expect(
      await screen.findByText(/Sample for react \(p0\)/i)
    ).toBeInTheDocument();
  });
});
