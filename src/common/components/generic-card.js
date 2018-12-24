import React from 'react';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default props => (
  <div className="bg-white bl bw2 br2 b--blue pa3 shadow-5 w-100 mv2">
    {props.children}
  </div>
)
