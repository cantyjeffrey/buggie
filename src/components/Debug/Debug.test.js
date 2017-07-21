// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Debug from "./index";

describe("<Debug />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Debug />)).toMatchSnapshot();
  });

  it("should render to static HTML", () => {
    expect(render(<Debug />).text()).toEqual("Debug");
  });
});
