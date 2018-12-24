import React from 'react';
import 'tachyons';


export default props => (
  <div className="bg-white bl bw2 b--blue pa3 shadow-5 w-100">
    <span className="db f4 sans-serif mv1">{props.title}</span>
    <span className="db f5 sans-serif gray">by {props.author}</span>
    <p className="db f5 sans-serif mid-gray lh-copy">{props.description}</p>
    <div className="flex flex-wrap justify-start">
      {props.tags && props.tags.map(tag => (
        <span className="pa1 mr1 bg-lightest-blue navy sans-serif ttc pointer">{tag}</span>
      ))}
    </div>
  </div>
)
