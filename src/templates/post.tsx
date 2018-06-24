import * as React from 'react'

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
    </div>
  )
}

export default post

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;