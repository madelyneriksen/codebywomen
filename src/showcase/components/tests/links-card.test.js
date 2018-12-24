import React from 'react';
import renderer from 'react-test-renderer';
import LinksCard from '../links-card';


describe("Navbar", () => {
  it("Matches Snapshot", () => {
    const data = {
      url: 'https://www.madelyneriksen.com',
      github: 'https://github.com/madelyneriksen/'
    }
    const tree = renderer.create(<LinksCard props={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
