import React from 'react';
import { Link } from 'gatsby';
import { NoSpacingCard as Card } from './generic-card';
import Img from 'gatsby-image';
import Tag from './tag'
import 'tachyons';
import '../styles/custom.tachyons.css';


export default props => (
  <Card>
    {props.image &&
        <Link to={props.slug} className="db mb1">
          <Img
            fluid={props.image.childImageSharp.fluid}
            alt={`Screenshot of the blog ${props.title}`}/>
        </Link>
    }
    <div className="pa3">
      <Link to={props.slug} className="db f3 sans-serif mb1 navy no-underline">{props.title}</Link>
      <div className="flex flex-wrap justify-start mb4">
        {props.tags && props.tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </div>
      <p className="db f4 sans-serif lh-copy mb4">{props.description}</p>
      <div className="flex justify-start">
        <Link to={props.slug} className="mr4 sans-serif blue f4 no-underline">View Details</Link>
        <a href={props.url} className="sans-serif blue f4 no-underline">Visit Site</a>
      </div>
    </div>
  </Card>
)
