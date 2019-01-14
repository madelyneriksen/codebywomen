import React from 'react';
import './styles/text-styles.css';


export default props => (
  <div
    className="text-content"
    dangerouslySetInnerHTML={{__html: props.html}} />
)
