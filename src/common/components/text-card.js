import React from 'react';
import 'tachyons';
import '../../common/styles/custom.tachyons.css';


export default props => {
  const {
    title,
    description,
  } = props;
  return (
    <div className="bg-white bl bw2 br2 b--blue pa3 shadow-5 w-100 mv2">
      <h2 className="accent-font navy">{title}</h2>
      <p className="sans-serif lh-copy f4">{description}</p>
    </div>
  )
}
