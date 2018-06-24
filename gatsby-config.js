module.exports = {
  siteMetadata: {
    title: `Jell의 세상 사는 이야기`,
    author: `Jell`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`
  ],
}
