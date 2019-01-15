import React from 'react';
import { Link } from 'gatsby';
import 'tachyons';
import '../styles/custom.tachyons.css';


const linkStyles = "near-white hover-mid-gray tracked-ns ttu sans-serif no-underline db mr2 mr4-ns";
const barStyles = "bg-near-black pv4 flex items-center justify-center justify-start-ns php2 ph3-ns z-999";


export default Navbar => (
  <React.Fragment>
    <div className={barStyles}>
      <Link
        className="f2 f1-l fw8 ttu sans-serif no-underline washed-blue tracked-tight"
        to="/">{"{"} Code<span className="fw3"> By </span>Women {"}"}</Link>
    </div>
    <div className={barStyles + " top-0"} style={{position: "sticky"}}>
      <Link className={linkStyles} to="/">Home</Link>
      <Link className={linkStyles} to="/about">About</Link>
      <Link className={linkStyles} to="/contact">Contact</Link>
      <a className={linkStyles} href="https://github.com/madelyneriksen/codebywomen">Contribute</a>
    </div>
  </React.Fragment>
)
