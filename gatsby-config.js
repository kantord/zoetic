const path = require('path')

const src = process.env.__SRC__
const dirname = path.dirname(src)

module.exports = {
  plugins: [
    // {
    //   resolve: '@mdx-deck/gatsby-plugin',
    //   options: {
    //     path: src,
    //     dirname,
    //   },
    // },
    {
      resolve: 'gatsby-theme-mdx-deck',
      // options: {
      //   // enable or disable gatsby-plugin-mdx
      //   mdx: false,
      //   // source directory
      //   contentPath: dirname,
      //   // base path for routes generate by this theme
      //   basePath: ''
      // }
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: dirname + "/decks/",
    //     ignore: [
    //       'node_modules',
    //       'public',
    //       '.cache',
    //     ]
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-compile-es6-packages',
    //   options: {
    //     modules: ['mdx-deck', '@mdx-deck/themes', '@mdx-deck/gatsby-plugin'],
    //   },
    // },
  ],
}
