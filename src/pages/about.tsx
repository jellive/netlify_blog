import * as React from "react";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default ({ data }: Props) => (
  <div>
    {/* <h1>About {JSON.stringify(data)}</h1><br /> */}
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      이것 저것 합니다.
    </p>
  </div>
);

export const aboutQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
