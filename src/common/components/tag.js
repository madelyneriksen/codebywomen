import React from 'react';
import 'tachyons';
import '../styles/custom.tachyons.css'


export default props => (
  <span className="pv1 ph2 mr1 mv1 bg-lightest-blue navy sans-serif ttc pointer br-pill dib">{props.children}</span>
)
