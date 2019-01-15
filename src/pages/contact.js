import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Contact from '../contact';


export default ({ data }) => {
  let message;
  let type;
  if (window) {
    const url = new URL(window.location.href);
    message = url.searchParams.get("message");
    type = url.searchParams.get("type");
  } else {
    message = false;
    type = false;
  }
  return (
    <Layout>
      <Contact
        message={message}
        type={type}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}


export const query = graphql`
  {
    markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "Contact"}}) {
      html
    }
  }
`
