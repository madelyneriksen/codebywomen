// Showcase page for a specific blog.
import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import 'tachyons';
import '../common/styles/custom.tachyons.css';


export default ({data}) => (
  <Layout>
    <h1 className="f3 sans-serif">{data.blogsYaml.title}</h1>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    blogsYaml(slug: {eq: $slug}) {
      title
    }
  }
`
