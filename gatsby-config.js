module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kaizen Infographic`,
        short_name: `kaizen`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/analytics-9.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-excel`,
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-react-helmet"
  ],
  siteMetadata: {
    title: "Kaizen Results"
  }
};
