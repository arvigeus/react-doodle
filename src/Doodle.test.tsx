import * as React from "react";
import { render } from "react-testing-library";
import { Doodle } from "./";

describe("it", () => {
  it("renders without crashing", () => {
    render(<Doodle />);
  });
});
