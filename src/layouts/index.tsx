import * as React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  // <div
  //   style={{
  //     background: 'rebeccapurple',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: 'white',
  //           textDecoration: 'none',
  //         }}
  //       >
  //         Jell의 세상 사는 이야기.
  //       </Link>
  //     </h1>
  //   </div>
  // </div>
  <AppBar>
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={(e: any) => { this.handleMenuBtnClicked(!this.state.leftOpen) }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="title" style={{ flex: 1 }} color="inherit">Jell의 세상 사는 이야기.</Typography>
    </Toolbar>
  </AppBar>
)

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Jell의 세상 사는 이야기"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout
