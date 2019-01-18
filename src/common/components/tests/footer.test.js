import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../footer';


describe("Footer Component", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

