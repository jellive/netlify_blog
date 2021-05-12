import {graphql, StaticQuery, useStaticQuery} from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Card, CardContent } from '@material-ui/core';
const Disqus = require('../components/Disqus/Disqus')

const post = () => {
  // const { markdownRemark } = data
  // const { frontmatter, html } = markdownRemark
  const data = useStaticQuery(graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        title
        date
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
  `

  )
  return (
    <>
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} - ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <div style={{ padding: 15 }}>
        <Card>
          <CardContent>
            <div>
              <h1>{data.markdownRemark.frontmatter.title}</h1>
              <h2>{data.markdownRemark.frontmatter.date}</h2>
            </div>
            <div
              style={{ fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif" }}
              dangerouslySetInnerHTML={{ __html: data.html }}
            />
          </CardContent>
        </Card>
      </div>
      <div style={{ padding: 15 }}>
        <Card>
          <CardContent>
            <Disqus
              id="disqus_thread"
              shortname="jell-1"
              title={data.markdownRemark.frontmatter.title}
              identifier={data.markdownRemark.frontmatter.title}
            /></CardContent>
        </Card>
      </div>
</>
   
  )
}

export default post

// export const pageQuery = graphql`
// query BlogPostQuery($slug: String!) {
//   markdownRemark(fields: { slug: { eq: $slug } }) {
//     html
//     frontmatter {
//       category
//       title
//       date
//     }
//   }
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `;

