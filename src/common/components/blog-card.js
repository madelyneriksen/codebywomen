import React from 'react';
import { Link } from 'gatsby';
import { NoSpacingCard as Card } from './generic-card';
import Img from 'gatsby-image';
import Tag from './tag'
import 'tachyons';
import '../styles/custom.tachyons.css';


export default props => (
  <Card className="flex flex-column">
    {props.image &&
        <Link to={props.slug} className="db mb1">
          <Img
            fluid={props.image.childImageSharp.fluid}
            alt={`Screenshot of the blog ${props.title}`}
            className="h5" />
        </Link>
    }
    <div className="pa3 flex flex-column justify-between h-100">
      <div>
        <Link to={props.slug} className="db f3 sans-serif mb1 navy no-underline">{props.title}</Link>
        <div className="flex flex-wrap justify-start">
        {props.tags && props.tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
        </div>
      </div>
      <div>
        <p className="db f4 sans-serif lh-copy">{props.description}</p>
      </div>
      <div className="flex justify-start">
        <Link to={props.slug} className="mr4 sans-serif blue f4 no-underline">View Details</Link>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="sans-serif blue f4 no-underline">Visit Site</a>
      </div>
    </div>
  </Card>
)
