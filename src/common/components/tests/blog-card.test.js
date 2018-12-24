import React from 'react';
import renderer from 'react-test-renderer';
import BlogCard from '../blog-card';


describe("Navbar", () => {
  it("Matches Snapshot", () => {
    const data = {
      title: "The Zen of Programming",
      slug: "/zen-of-programming",
      author: "Ali Spittel",
      tags: ['javascript', 'python'],
      description: "The zen of programming",
    }
    const tree = renderer.create(<BlogCard props={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
