import * as React from "react";
import * as ReactDOM from "react-dom";
import { Doodle } from "../src";

describe("it", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Doodle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
