import React from 'react';
import renderer from 'react-test-renderer';
import ContactPage from '../index.js';


describe("ContactPage Component", () => {
  it("Matches Snapshot", () => {
    const data = {
      messages: "Awesome Job!",
      type: "success",
      html: "<p>Hello</p>"
    }
    const tree = renderer.create(<ContactPage {...data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

