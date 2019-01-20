import React from 'react';
import Layout from '../common/layouts';
import Seo from '../common/components/seo';
import Helmet from 'react-helmet'
import TextContent from '../common/components/text-content';
import { graphql } from 'gatsby';


export default ({ data }) => (
  <Layout>
    <Seo
      title="404 Not Found"
      description="The requested page could not be found! Sorry!" />
    <Helmet>
      <meta type="robots" content="noindex, nofollow" />
    </Helmet>
    <TextContent
      html={data.markdownRemark.html} />
  </Layout>
)


export const query = graphql`
  {
    markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "404"}}) {
      html
    }
  }
`
