// Showcase page for a specific blog.
import React from 'react';
import Layout from '../common/layouts';
import Hero from '../common/components/hero';
import TextCard from '../common/components/text-card';
import { graphql } from 'gatsby';
import 'tachyons';
import '../common/styles/custom.tachyons.css';


export default ({ data }) => {
  const {
    title,
    description,
    author,
  } = data.blogsYaml;
  return (
    <Layout>
      <Hero
        title={title}
        subtitle={`by ${author.name}`} />
      <div className="mw7 center pa2">
        <TextCard
          title={`Description`}
          description={description} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blogsYaml(slug: {eq: $slug}) {
      title
      description
      author {
        name
      }
    }
  }
`
