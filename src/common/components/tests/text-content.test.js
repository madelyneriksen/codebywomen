import React from 'react';
import renderer from 'react-test-renderer';
import TextContent from '../text-content.js';


describe("TextContent Component", () => {
  it("Matches Snapshot", () => {
    const html = '<p>Hello world!</p>'
    const tree = renderer.create(<TextContent html={html} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

