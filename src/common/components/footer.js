import React from 'react';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default () => (
  <footer
    className="h5 bg-light-gray flex flex-wrap justify-center">
    <span className="db w-100 tc self-center sans-serif">Built with React and Gatsby.</span>
    <span
      className="db w-100 tc self-center sans-serif"
    >Grab a copy of the source code on <a
        className="dark-gray"
        href="https://github.com/madelyneriksen/codebywomen">Github.</a></span>
    <span className="db w-100 tc self-end sans-serif bg-moon-gray pa1">Copyright 2019 Madelyn Eriksen</span>
  </footer>
)
