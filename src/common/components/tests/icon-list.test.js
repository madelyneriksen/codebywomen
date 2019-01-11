import React from 'react';
import renderer from 'react-test-renderer';
import IconList from '../icon-list.js';


describe("IconList Component", () => {
  it("Matches Snapshot", () => {
    var links = {
      github: "https://github.com/madelyneriksen/"
    }
    const tree = renderer.create(<IconList links={links} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

