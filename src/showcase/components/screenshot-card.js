// Card for reaturing preview screenshots.
import React from 'react';
import Header from '../../common/components/small-header';
import Img from 'gatsby-image';
import Card from '../../common/components/generic-card';


export default props => (
  <Card>
    <Header>Site Screenshot</Header>
    <a href={props.url} className="pointer"><Img fluid={props.image} /></a>
  </Card>
)
