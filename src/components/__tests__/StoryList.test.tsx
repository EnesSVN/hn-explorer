import { render, screen, fireEvent } from "@testing-library/react";
import StoryList from "../StoryList";

describe("StoryList", () => {
  it("shows loading then results", async () => {
    render(<StoryList />);
    expect(screen.getByRole("status")).toHaveTextContent(/Loading/i);
    expect(await screen.findByText(/Sample for react/i)).toBeInTheDocument();
  });

  it("shows error when query = error", async () => {
    render(<StoryList />);
    const input = screen.getByLabelText(/Search/i);
    fireEvent.change(input, { target: { value: "error" } });
    expect(await screen.findByRole("alert")).toHaveTextContent(/Error/i);
  });
});
