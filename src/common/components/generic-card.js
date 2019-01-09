import React from 'react';
import 'tachyons';
import '../styles/custom.tachyons.css';


export const NoSpacingCard = props => {
  const baseClasses = "w-100";
  const joinedClasses = props.className ? baseClasses + " " + props.className : baseClasses;
  return (
  <div className={joinedClasses}>
    {props.children}
  </div>
  )
}


export default props => (
  <NoSpacingCard className="pa3">{props.children}</NoSpacingCard>
)
