// Showcase page for a specific blog.
import React from 'react';
import Layout from '../common/layouts';
import Hero from '../common/components/hero';
import TextCard from '../common/components/text-card';
import LinksCard from './components/links-card';
import { graphql } from 'gatsby';
import 'tachyons';
import '../common/styles/custom.tachyons.css';


export default ({ data }) => {
  const {
    title,
    description,
    author,
    url,
  } = data.blogsYaml;
  return (
    <Layout>
      <Hero
        title={title}
        subtitle={`by ${author.name}`} />
      <div className="mw7 center">
        <TextCard
          title={`Description`}
          description={description} />
        <TextCard
          title={`About the Author`}
          description={author.bio} />
        <LinksCard
          url={url}
          github={author.github} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blogsYaml(slug: {eq: $slug}) {
      title
      description
      url
      author {
        name
        bio
        github
      }
    }
  }
`
