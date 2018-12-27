// Column grid for holding cards
import React from 'react';
import 'tachyons';
import '../../common/styles/custom.tachyons.css';
import '../styles/columns.css';


export default props => (
  <div className="homepage__columns mw9 center">
    {props.children}
  </div>
)
