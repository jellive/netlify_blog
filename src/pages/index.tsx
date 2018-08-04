import * as React from 'react'
import Link from 'gatsby-link'
import { Card, CardContent, Divider, Chip } from '@material-ui/core';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }

    allMarkdownRemark: {
      edges: {
        node: {
          html: string
          frontmatter: {
            title: string
            date(formatString: "MMMM DD, YYYY"): string
            path: string
            tags: string[]
          },
          fields: {
            slug: string
          }
        }
      }[]
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <Card>
        <CardContent>
          <h1>이것 저것 해보는 블로그입니다.</h1>
          {/* <p>
            Welcome to your new{' '}
            <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
          <p>Now go build something great.</p> */}
          {/* {this.props.data.allFile.totalCount}개가 있습니다.<br /> */}
          {
            this.props.data.allMarkdownRemark.edges.map(edge => (
              <div style={{ padding: 15 }}>
                <Card key={edge.node.frontmatter.title}>
                  <Link to={edge.node.fields.slug}>
                    <CardContent>
                      <h3 style={{ marginBottom: 50 }}>
                        {edge.node.frontmatter.title}{" "}
                        <span style={{ color: '#bbb' }}>
                          {"- "}{edge.node.frontmatter.date}
                        </span>
                      </h3><br />
                      <p style={{fontSize: 12}}>Tag:{" "}
                      {edge.node.frontmatter.tags.map(tag => (
                          <Chip label={tag} style={{fontSize: 12}}/>
                        ))}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            ))
          }
        </CardContent>
      </Card>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark (
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            # Assumes you're using title in your frontmatter.
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            category
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
