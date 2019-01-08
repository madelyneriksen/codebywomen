import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../navbar';


describe("Navbar", () => {
  it("Matches Snapshot", () => {
    const data = {
      site: {
        siteMetadata: {
          title: "CodeByWomen",
        },
      },
    };
    const tree = renderer.create(<Navbar data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
