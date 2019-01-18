module.exports = {
  siteMetadata: {
    title: "CodeByWomen",
    siteUrl: "https://www.codebywomen.com"
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "CodeByWomen",
        short_name: "CodeByWomen",
        start_url: '/',
        background_color: '#f4f4f4',
        theme_color: "#111111",
        display: 'browser',
        icon: 'content/img/codebywomen.png',
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-130489047-2",
        head: false,
        anonymize: true,
        respectDNT: true,
      }
    },
  ]
}
