module.exports = {
  siteMetadata: {
    title: "CodeByWomen",
  },
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-transformer-remark',
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400,700,800'],
        },
      },
    },
  ]
}
