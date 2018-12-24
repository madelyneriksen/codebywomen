import React from 'react';
import Card from './generic-card'
import 'tachyons';
import '../../common/styles/custom.tachyons.css';


export default props => {
  const {
    title,
    description,
  } = props;
  return (
    <Card>
      <h2 className="accent-font navy">{title}</h2>
      <p className="sans-serif lh-copy f4 mid-gray">{description}</p>
    </Card>
  )
}
