import React from 'react';
import renderer from 'react-test-renderer';
import BlogCard from '../blog-card';


describe("Blog Card", () => {
  it("Matches Snapshot", () => {
    const data = {
      title: "The Zen of Programming",
      slug: "/zen-of-programming",
      author: "Ali Spittel",
      tags: ['javascript', 'python'],
      description: "The zen of programming",
      links: {},
    }
    const tree = renderer.create(<BlogCard {...data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
