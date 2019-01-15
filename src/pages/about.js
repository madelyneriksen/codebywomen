import React from 'react';
import Layout from '../common/layouts';
import TextContent from '../common/components/text-content';
import { graphql } from 'gatsby';


export default ({ data }) => (
  <Layout>
    <TextContent
      html={data.markdownRemark.html} />
  </Layout>
)


export const query = graphql`
  {
    markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "About"}}) {
      html
    }
  }
`
