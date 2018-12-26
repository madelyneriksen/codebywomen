// Main content and descriptions
import React from 'react';
import Header from '../../common/components/small-header';
import Img from 'gatsby-image';
import {NoSpacingCard as Card} from '../../common/components/generic-card';


export default props => (
  <Card>
    <a href={props.url} className="pointer db mb4"><Img fluid={props.image} /></a>
    <div className="pa3 lh-copy f4 sans-serif">
      <Header>Description</Header>
      <p>{props.text}</p>
    </div>
  </Card>
)
