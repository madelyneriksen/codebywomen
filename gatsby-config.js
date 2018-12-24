module.exports = {
  siteMetadata: {
    title: "CodeByWomen",
  },
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './content/',
      }
    },
  ]
}
