// Sidebar links to the authors other content
import React from 'react';
import Card from '../../common/components/generic-card';
import {
  FaGithub,
  FaGlobe,
} from 'react-icons/fa';
import 'tachyons';
import '../../common/styles/custom.tachyons.css';


const IconLink = props => (
    <a
      href={props.to}
      className="mv3 f4 db no-underline sans-serif navy hover-blue flex items-center">
      {props.children}
      <div className="ph2">{props.label}</div>
  </a>
)


export default (props) => {
  const {
    url,
    github,
  } = props;
  return (
    <Card>
      <h2 className="accent-font navy">Links</h2>
      <IconLink to={url} label="Website"><FaGlobe /></IconLink>
      {github &&
        <IconLink to={github} label="Github"><FaGithub /></IconLink>
      }
    </Card>
  )
}
