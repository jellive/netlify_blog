import * as React from 'react'
const Disqus = require('../components/Disqus/Disqus')

const post = ({ data }: any) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Disqus
        id="disqus_thread"
        shortname="jell-1"
        title={frontmatter.title}
        identifier={frontmatter.title}
      />
    </div>
  )
}

export default post

export const pageQuery = graphql`
query BlogPostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      category
      title
      date
    }
  }
}
`;

