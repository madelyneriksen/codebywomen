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
        links={node.authorLinks}
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
          authorLinks: author {
            github
            youtube
            twitter
            instagram
            pinterest
          }
          description
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
