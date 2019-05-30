import * as React from "react";
import { render } from "@testing-library/react";
import { Doodle } from "./";

describe("it", () => {
  it("renders without crashing", () => {
    render(<Doodle />);
  });
});
