// CSS Grid powered layout.
import React from 'react';
import 'tachyons';
import '../../common/styles/custom.tachyons.css';
import '../styles/grid.css';


export default props => (
  <div className="showcase__grid w-100 mw9 pa2">
    {props.children}
  </div>
)
