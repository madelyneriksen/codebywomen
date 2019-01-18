// Main Layout for the website
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Helmet from 'react-helmet';
import 'tachyons';


export default props => (
  <div>
    <Helmet>
      <body className="dark-gray bg-near-black" />
    </Helmet>
    <Navbar />
    <div className="bg-near-white min-vh-100">
      {props.children}
    </div>
    <Footer />
  </div>
)
