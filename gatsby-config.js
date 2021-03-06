module.exports = {
  pathPrefix: "React-Interact/",
  siteMetadata: {
    title: "React-Interact",
    siteUrl: `https://github.com/CSC-464-Regular-Devs/`,
    description:
      "Tutorial website devoted to encouraging aspiring developers to use the react framework",
    author: "Regular Developers"
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/MDX/`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "src/images/ReactLogo.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:"
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-catch-links",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ]
};
