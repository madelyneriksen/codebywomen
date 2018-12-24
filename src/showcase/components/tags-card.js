// Card for showing website tags
import React from 'react';
import Header from '../../common/components/small-header';
import Card from '../../common/components/generic-card';
import Tag from '../../common/components/tag';
import 'tachyons';
import '../../common/styles/custom.tachyons.css';


export default props => ( 
  <Card>
    <Header>Tags</Header>
    {props.tags.map(tag => (
      <Tag>{tag}</Tag>
    ))}
  </Card>
)
