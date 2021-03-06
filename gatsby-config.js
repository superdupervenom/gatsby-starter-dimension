module.exports = {
  siteMetadata: {
    title: "Test Lift",
    author: "Test Lift",
    description: "Top freelance software developers, designers, marketers, and project managers"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Test Lift',
        short_name: 'Test Lift',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
