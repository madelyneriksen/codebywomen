import React from 'react';
import Message from './messages.js';
import Form from './form.js';
import TextContent from '../common/components/text-content';
import 'tachyons';


export default props => (
  <div className="mw7 center">
    <Message message={props.message} type={props.type} /> 
    <TextContent html={props.html} />
    <Form />
  </div>
)
