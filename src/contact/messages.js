import React from 'react';
import 'tachyons';




export default props => {
  const messageClasses = "sans-serif pa3 ba db br3 f5 ";
  const successClasses = "bg-washed-green b--green dark-green";
  const errorClasses = "bg-washed-red b--red dark-red";

  return (
  <div className="pa2">
    {props.message &&
      <div
        className={
          messageClasses
            + (props.type === "success" ? successClasses : errorClasses)
        }>{props.message}</div>
    }
  </div>
  )
}
