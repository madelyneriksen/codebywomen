import React from 'react';
import { Link } from 'gatsby';
import Card from './generic-card';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default props => (
  <Card>
    <Link to={props.slug} className="db f4 sans-serif mv1 navy no-underline">{props.title}</Link>
    <span className="db f5 sans-serif gray">by {props.author}</span>
    <p className="db f5 sans-serif lh-copy">{props.description}</p>
    <div className="flex flex-wrap justify-start">
      {props.tags && props.tags.map(tag => (
        <span className="pa1 mr1 mv1 bg-lightest-blue navy sans-serif ttc pointer">{tag}</span>
      ))}
    </div>
  </Card>
)
