import React from 'react';
import { Link } from 'gatsby';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default Navbar => (
  <React.Fragment>
    <div className="bg-near-black pv4 flex items-center ph3 z-999">
      <Link
        className="f2 f1-l fw8 ttu sans-serif no-underline washed-blue tracked-tight"
        to="/">{"{"} Code<span className="fw3"> By </span>Women {"}"}</Link>
    </div>
    <div className="bg-near-black pv4 flex items-center ph3 z-999 top-0" style={{position: "sticky"}}>
      <Link className="washed-blue tracked ttu sans-serif no-underline db" to="/about">About &bull;&nbsp;</Link>
      <Link className="washed-blue tracked ttu sans-serif no-underline db" to="/contact">Contact &bull;&nbsp;</Link>
      <a className="washed-blue tracked ttu sans-serif no-underline db" href="https://github.com/madelyneriksen/codebywomen">Contribute</a>
    </div>
  </React.Fragment>
)
