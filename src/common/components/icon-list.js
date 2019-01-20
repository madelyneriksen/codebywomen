import React from 'react';
import 'tachyons';
import '../styles/custom.tachyons.css';
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoPinterest,
  IoLogoInstagram
} from 'react-icons/io';


export default props => (
    <div className="flex justify-start items-center f3 pv2">
      {props.links.github &&
        <a href={props.links.github} className="dark-gray mr2"><IoLogoGithub /></a>
      }
      {props.links.twitter &&
        <a href={props.links.twitter} className="dark-gray mh2"><IoLogoTwitter /></a>
      }
      {props.links.youtube &&
        <a href={props.links.youtube} className="dark-gray mh2"><IoLogoYoutube /></a>
      }
      {props.links.pinterest &&
        <a href={props.links.pinterest} className="dark-gray mh2"><IoLogoPinterest /></a>
      }
      {props.links.instagram &&
        <a href={props.links.instagram} className="dark-gray mh2"><IoLogoInstagram /></a>
      }
    </div>
)
