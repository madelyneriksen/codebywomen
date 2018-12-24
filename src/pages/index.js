import React from "react"
import BlogCard from '../common/components/blog-card';
import { graphql } from 'gatsby';
import Layout from '../common/layouts';

export default ({data}) => (
  <Layout>
    <div className="mw7 center pa2">
    {data.allBlogsYaml.edges.map(({node}) => (
      <BlogCard
        title={node.title}
        author={node.author}
        description={node.description}
        tags={node.tags}
      />
    ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allBlogsYaml {
      edges {
        node {
          title
          author
          description
          tags
        }
      }
    }
  }
`
