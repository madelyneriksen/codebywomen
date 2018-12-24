// Showcase page for a specific blog.
import React from 'react';
import Layout from '../common/layouts';
import Hero from '../common/components/hero';
import Grid from './components/grid';
import TextCard from '../common/components/text-card';
import ScreenshotCard from './components/screenshot-card.js';
import LinksCard from './components/links-card';
import TagsCard from './components/tags-card';
import { graphql } from 'gatsby';
import 'tachyons';
import '../common/styles/custom.tachyons.css';
import './styles/grid.css';


export default ({ data }) => {
  const {
    title,
    description,
    author,
    url,
    screenshot,
    tags,
  } = data.blogsYaml;
  return (
    <Layout>
      <Hero
        title={title}
        subtitle={`by ${author.name}`} />
      <Grid>
        <div className="content">
        <TextCard
          title={`Description`}
          description={description} />
        {screenshot &&
          <ScreenshotCard
            image={screenshot.childImageSharp.fluid}
            url={url} />
        }
        </div>
        <div className="sidebar">
          <TextCard
            title={`About the Author`}
            description={author.bio} />
          <LinksCard
            url={url}
            github={author.github} />
          <TagsCard
            tags={tags} />
        </div>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blogsYaml(slug: {eq: $slug}) {
      title
      description
      url
      tags
      author {
        name
        bio
        github
      }
      screenshot {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
