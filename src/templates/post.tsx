import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import * as React from 'react'
import {Helmet} from 'react-helmet'
import { Card, CardContent } from '@material-ui/core'
const Disqus = require('../components/Disqus/Disqus')
import ReactDisqusComments from 'react-disqus-comments'

const post = ({data}) => {
  // const { markdownRemark } = data
  // const { frontmatter, html } = markdownRemark
  // const data = useStaticQuery(graphql`
  //   query ($slug: String) {
  //     markdownRemark(fields: { slug: { eq: $slug } }) {
  //       html
  //       frontmatter {
  //         category
  //         title
  //         date
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    
  //   <StaticQuery
  //   query={graphql`
  //   query BlogPostQuery($slug: String) {
  //     markdownRemark(fields: { slug: { eq: $slug } }) {
  //       html
  //       frontmatter {
  //         category
  //         title
  //         date
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `}
  //   render={(data) =>(
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
              style={{
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              }}
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </CardContent>
        </Card>
      </div>
      <div style={{ padding: 15 }}>
        <Card>
          <CardContent>
            <ReactDisqusComments
              category_id="disqus_thread"
              shortname="jell-1"
              title={data.markdownRemark.frontmatter.title}
              identifier={data.markdownRemark.frontmatter.title}
            />

            {/* <Disqus
              id="disqus_thread"
              shortname="jell-1"
              title={data.markdownRemark.frontmatter.title}
              identifier={data.markdownRemark.frontmatter.title}
            /> */}
          </CardContent>
        </Card>
        
      </div>
      </>
      // )}
      // />
    
  )
}

export default post

export const query = graphql`
query BlogPostQuery($slug: String!) {
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
`;
