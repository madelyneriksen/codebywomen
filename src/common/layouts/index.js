// Main Layout for the website
import React from 'react';
import { Navbar } from '../components/navbar';
import Helmet from 'react-helmet';
import 'tachyons';


export default props => (
  <div>
    <Helmet>
      <body className="dark-gray" />
    </Helmet>
    <Navbar />
    {props.children}
  </div>
)
