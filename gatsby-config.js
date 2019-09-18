module.exports={
  plugins: ['gatsby-plugin-emotion', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      defaultLayouts: {
        default: require.resolve('./src/components/layout.js')
      },
      gatsbyRemarkPlugins: ['gatsby-remark-images'],
      plugins: ['gatsby-remark-images']
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: 'src/posts'
    }
  },

  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: 'src/pages'
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: 'src/images'
    }
  },
  {
    resolve: `gatsby-source-instagram`,
    options: {
      username: `gatsbyjs`,
    },
  },
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    options: {
      production: true,
      disable: !process.env.ANALYZE_BUNDLE_SIZE,
      generateStatsFile: true,
      analyzerMode: 'static',
    },
  },
],
  siteMetadata: {
    title: 'Frontend Master Gatsby Workshop',
    description: 'A site we built together during a full-day Frontend Master Gatsby workshop!'
  }
}