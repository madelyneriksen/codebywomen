import React from 'react';
import { Link } from 'gatsby';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default Navbar => (
  <React.Fragment>
    <div className="bg-navy pv4 flex items-center ph3 z-999">
      <Link className="f2 f1-lg accent-font no-underline washed-blue" to="/">Code<br />By Women</Link>
    </div>
    <div className="bg-navy pv4 flex items-center ph3 z-999 top-0" style={{position: "sticky"}}>
      <Link className="washed-blue tracked ttu sans-serif no-underline db" to="/about">About &bull;&nbsp;</Link>
      <Link className="washed-blue tracked ttu sans-serif no-underline db" to="/contact">Contact &bull;&nbsp;</Link>
      <Link className="washed-blue tracked ttu sans-serif no-underline db" to="/submit">Submit</Link>
    </div>
  </React.Fragment>
)
