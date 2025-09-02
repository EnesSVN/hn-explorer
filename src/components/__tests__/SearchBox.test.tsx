import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "../SearchBox";

describe("SearchBox", () => {
  it("renders input with placeholder", () => {
    render(<SearchBox onChange={() => {}} />);
    expect(
      screen.getByPlaceholderText(/Search Hacker News/i)
    ).toBeInTheDocument();
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<SearchBox onChange={handleChange} />);

    const input = screen.getByLabelText(/Search/i);
    await user.type(input, "react");

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith("r");
    expect(handleChange).toHaveBeenLastCalledWith("react");
  });
});
