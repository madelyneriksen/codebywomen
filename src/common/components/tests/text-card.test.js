import React from 'react';
import renderer from 'react-test-renderer';
import TextCard from '../text-card';


describe("Text Card", () => {
  it("Matches Snapshot", () => {
    const data = {
      title: "The Zen of Programming",
      description: "The zen of programming",
    }
    const tree = renderer.create(<TextCard props={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
