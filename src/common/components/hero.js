// Hero Unit for titles at tops of pages.
import React from 'react';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default props => (
  <div className="pv5 flex items-center justify-center flex-column bg-lightest-blue">
    <h1 className="f2 f1-ns accent-font navy lh-copy">{props.title}</h1>
    {props.subtitle &&
      <p className="sans-serif lh-copy f4">{props.subtitle}</p>
    }
  </div>
)
