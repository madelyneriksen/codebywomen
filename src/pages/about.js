import React from 'react';
import Layout from '../common/layouts';
import Seo from '../common/components/seo';
import TextContent from '../common/components/text-content';
import { graphql } from 'gatsby';


export default ({ data }) => (
  <Layout>
    <Seo
      title="About The Directory"
      description="CodeByWomen is an open-source curated directory of awesome tech blogs and projects run by women." />
    <TextContent
      html={data.markdownRemark.html} />
  </Layout>
)


export const query = graphql`
  {
    markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "About"}}) {
      html
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
