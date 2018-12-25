import React from 'react';
import 'tachyons';
import '../styles/custom.tachyons.css'


export default props => (
  <span className="pa1 mr1 mv1 bg-lightest-blue navy sans-serif ttc pointer dib">{props.children}</span>
)
