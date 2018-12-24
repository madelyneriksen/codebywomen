import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../blog-card';


describe("Navbar", () => {
  it("Matches Snapshot", () => {
    const data = {
      title: "The Zen of Programming",
      subtitle: "by Ali Spittel",
    }
    const tree = renderer.create(<Hero props={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
