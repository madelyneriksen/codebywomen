// Main Layout for the website
import React from 'react';
import { Navbar } from '../components/navbar';
import Helmet from 'react-helmet';
import 'tachyons';


export default props => (
  <div>
    <Helmet>
      <body className="mid-gray" />
    </Helmet>
    <Navbar />
    {props.children}
  </div>
)
