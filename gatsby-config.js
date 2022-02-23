module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['mdx-deck', '@mdx-deck/themes', 'gatsby-theme-mdx-deck'],
      },
    },
  ],
}
