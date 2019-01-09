import React from "react"
import BlogCard from '../common/components/blog-card';
import Columns from '../homepage/components/columns';
import { graphql } from 'gatsby';
import Layout from '../common/layouts';

export default ({data}) => (
  <Layout>
    <Columns>
    {data.allBlogsYaml.edges.map(({node}) => (
      <BlogCard
        title={node.title}
        author={node.author.name}
        description={node.description}
        image={node.screenshot}
        url={node.url}
      />
    ))}
    </Columns>
  </Layout>
)

export const query = graphql`
  query {
    allBlogsYaml {
      edges {
        node {
          title
          author {
            name
          }
          description
          tags
          slug
          url
          screenshot {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
