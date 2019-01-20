import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../form.js';


describe("Form Component", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

