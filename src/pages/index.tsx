import * as React from 'react'
import Link from 'gatsby-link'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    // allFile: {
    //   totalCount: number
    //   edges: {
    //     node: {
    //       id: string
    //       relativePath: string,
    //       prettySize: string,
    //       extension: string,
    //       birthTime: string
    //     }
    //   }[]
    // }
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
      <div>
        <h1>이것 저것 해보는 블로그입니다.</h1>
        <p>
          Welcome to your new{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Now go build something great.</p>
        {/* {this.props.data.allFile.totalCount}개가 있습니다.<br /> */}
        {
          this.props.data.allMarkdownRemark.edges.map((edge) => (
            <div key={edge.node.frontmatter.title} style={{borderStyle: 'dotted'}}>
              <h3 style={{ marginBottom: 50 }}>
                <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}{" "}</Link>
                <span style={{ color: '#bbb' }}>
                  {edge.node.frontmatter.date}
                </span>
              </h3><br/>
            </div>
          ))
        }
        {/* <Link to="/notice/2018/06/19/일단_급한_일/">일단 급한 일</Link><br />
        <Link to="/notice/2018/06/17/시작/">시작</Link><br />
        <Link to="/page-2/">Go to page 2</Link><br /> */}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            # Assumes you're using title in your frontmatter.
            title
            date(formatString: "MMMM DD, YYYY")
            path
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
