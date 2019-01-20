import React from 'react';
import renderer from 'react-test-renderer';
import Messages from '../messages.js';


describe("Messages Component", () => {
  it("Matches Snapshot On Success", () => {
    const data = {
      message: "Awesome!",
      type: "success"
    }
    const tree = renderer.create(<Messages {...data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("Matches Snapshot On Error", () => {
    const data = {
      message: "Awesome!",
      type: "error"
    }
    const tree = renderer.create(<Messages {...data} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

