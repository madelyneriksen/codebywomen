import React from 'react';
import Helmet from 'react-helmet';


export default props => (
  <Helmet>
    <title>{props.title} | CodeByWomen</title>
    <meta name="description" content={props.description} />
  </Helmet>
)

