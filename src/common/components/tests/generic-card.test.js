import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../generic-card';


describe("Generic Card", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
