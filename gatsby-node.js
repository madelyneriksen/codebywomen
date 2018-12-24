const path = require('path');


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
        query {
          allBlogsYaml {
            edges {
              node {
                slug
              }
            }
          }
        }
        `
      ).then(result => {
      if (result.errors) {
        reject(result.errors);
      };
      const allBlogs = result.data.allBlogsYaml.edges;
      const template = path.resolve('src/showcase/template.js');
      allBlogs.forEach(({ node }) => {
        let slug = node.slug;
        createPage({
          path: slug,
          component: template,
          context: {
            slug,
          },
        })
      })
    })
  )})
};
