import React from 'react';
import 'tachyons';


const messageClasses = "sans-serif pa3 ba db br3 f4 ";
const successClasses = "bg-washed-green b--green dark-green";
const errorClasses = "bg-washed-red b--red dark-red";


export default props => (
  <div
    className={
      messageClasses
      + (props.type === "success" ? successClasses : errorClasses)
    }>{props.message}</div>
)
