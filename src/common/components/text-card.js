import React from 'react';
import Header from './small-header';
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
      <Header>{title}</Header>
      <p className="sans-serif lh-copy f4 mid-gray">{description}</p>
    </Card>
  )
}
