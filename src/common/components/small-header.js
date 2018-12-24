// Small Header for details cards.
import React from 'react';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default props => (
  <h2 className="accent-font ma0 navy">{props.children}</h2>
)
