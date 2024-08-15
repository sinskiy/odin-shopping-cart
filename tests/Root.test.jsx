import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routes from "../src/routes";
import userEvent from "@testing-library/user-event";

describe("Root component", () => {
  it("is the same as a snapshot", () => {
    const router = createMemoryRouter(routes);
    const { container } = render(<RouterProvider router={router} />);

    expect(container).toMatchSnapshot();
  });
  it("changes routes correctly", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const shopNavLink = screen.getByRole("link", { name: /shop$/i });

    await user.click(shopNavLink);

    screen.debug();
    expect(shopNavLink).toHaveClass("active");
  });
});
