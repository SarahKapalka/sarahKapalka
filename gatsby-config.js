/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `my-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `a website show casing Sarah Kapalka's best works`,
  },
  plugins: ["gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  'gatsby-plugin-postcss',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en-GB'
    }
  },
]
};