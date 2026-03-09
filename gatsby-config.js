const { adapters } = require('gatsby-adapter-netlify')

module.exports = {
  adapter: adapters.createAdapter(),
  siteMetadata: {
    title: 'Khufu',
    description: 'Khufu - Site en construction',
    author: '@khufu'
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Khufu',
        short_name: 'Khufu',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/khufu-icon.png'
      }
    }
  ]
}
