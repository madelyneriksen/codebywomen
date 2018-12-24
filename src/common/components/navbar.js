import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import 'tachyons';


export const PureNavbar = props => {
  const data = props.data;
  return (
    <div class="bg-white h3 flex items-center pa2">
      <span class="f3 sans-serif">{data.site.siteMetadata.title}</span>
    </div>
  )
}


export const Navbar = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <PureNavbar {...props} data={data} />} />
)
