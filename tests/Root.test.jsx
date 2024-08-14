import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Root from "../src/routes/Root";

describe("Root component", () => {
  it("is the same as a snapshot", () => {
    const { container } = render(<Root />);
    expect(container).toMatchSnapshot();
  });
});
