module.exports = {
  // Site metadata for reusing common pieces of data across the site
  // See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#sitemetadata
  siteMetadata: {
    siteUrl: 'https://www.comp301.com',
    title: 'UNC COMP 301',
  },

  // Gatsby plugins
  // See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#plugins
  plugins: [
    // SASS/SCSS
    'gatsby-plugin-sass',

    // Image assets
    'gatsby-plugin-image', // React <StaticImage> component
    'gatsby-plugin-sharp', // Sharp image processing library
    'gatsby-transformer-sharp', // Dynamic image resizing and cropping

    // <head> tag management
    // See: https://github.com/nfl/react-helmet
    'gatsby-plugin-react-helmet',

    // Imports relative to root
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: `${__dirname}/src/components`,
        pages: `${__dirname}/src/pages`,
        styles: `${__dirname}/src/styles`,
      },
    },

    // Import all content from /pages directory into Gatsby
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },

    // Markdown support with MDX
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          pages: require.resolve('./src/components/layout/layout.jsx'),
        },
      },
    },

    'gatsby-plugin-sitemap',

    // PWA manifest file
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `UNC COMP 301`,
        short_name: `COMP 301`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#4b9cd3`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
