import React from 'react';
import { Link } from 'gatsby';
import Card from './generic-card';
import Img from 'gatsby-image';
import Tag from './tag'
import 'tachyons';
import '../styles/custom.tachyons.css';


export default props => (
  <Card>
    {props.image &&
        <Img className="br2" fluid={props.image.childImageSharp.fluid} />
    }
    <Link to={props.slug} className="db f3 sans-serif mv1 navy no-underline">{props.title}</Link>
    <div className="flex flex-wrap justify-start">
      {props.tags && props.tags.map(tag => (
        <Tag>{tag}</Tag>
      ))}
    </div>
    <p className="db f4 sans-serif lh-copy">{props.description}</p>
    
  </Card>
)
