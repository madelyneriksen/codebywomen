import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import 'tachyons';


export const PureNavbar = props => {
  const data = props.data;
  return (
    <div className="bg-white h3 flex items-center pa2">
      <Link className="f3 sans-serif no-underline dark-gray" to="/">{data.site.siteMetadata.title}</Link>
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
