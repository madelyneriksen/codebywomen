import React from 'react';
import Message from './messages.js';
import Form from './form.js';
import 'tachyons';


export default props => (
  <div className="mw7 center pa2">
    {props.message &&
      <Message message={props.message} type={props.type} /> 
    }
    <h1 className="sans-serif">Contact CodeByWomen</h1>
    <Form />
  </div>
)
