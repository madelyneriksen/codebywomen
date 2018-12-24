// Card for reaturing preview screenshots.
import React from 'react';
import Img from 'gatsby-image';
import Card from '../../common/components/generic-card';


export default props => (
  <Card>
    <h2 className="accent-font navy">Site Screenshot</h2>
    <a href={props.url} className="pointer"><Img fluid={props.image} /></a>
  </Card>
)
