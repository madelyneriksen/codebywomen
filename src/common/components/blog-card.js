import React from 'react';
import Img from 'gatsby-image';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default props => (
  <div className="w-100 flex flex-column">
    {props.image &&
      <div>
        <Img
          fluid={props.image.childImageSharp.fluid}
          alt={`Screenshot of the blog ${props.title}`}
          className="h5" />
      </div>
    }
    <div className="pv2 flex flex-column justify-between h-100">
      <div>
        <h3 className="fw3 db f3 sans-serif mb1 dark-gray no-underline">{props.title}</h3>
        <span className="sans-serif gray">by {props.author}</span>
        <p className="db f5 sans-serif lh-copy">{props.description}</p>
      </div>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="db sans-serif near-white bg-near-black bg-animate hover-bg-mid-gray b ttu w-100 no-underline pv3 tc">Visit Site</a>
    </div>
  </div>
)
