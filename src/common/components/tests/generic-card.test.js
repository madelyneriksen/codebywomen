import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../generic-card';


describe("Navbar", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
