import React from "react";
import Home from "../Home";
import { create } from "react-test-renderer";

jest.mock("../GoogleAuth", () => {
  return function DummyGoogleAuth() {
    return (
      <></>
    );
  };
});

describe("Home component", () => {
  test("Home component matches the snapshot", () => {
    const home = create(<Home />);
    expect(home.toJSON()).toMatchSnapshot();
  });
});
