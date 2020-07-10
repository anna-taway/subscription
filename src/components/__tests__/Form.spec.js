import React from "react";
import Form from "../Form";
import { create } from "react-test-renderer";

describe("Form component", () => {
  test("Form component matches the snapshot", () => {
    const form = create(<Form />);
    expect(form.toJSON()).toMatchSnapshot();
  });
});
