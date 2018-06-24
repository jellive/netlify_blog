import * as React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Drawer, MenuItem } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import Header from './Header';


interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

interface State {
  openMenu: boolean
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, State> {
  constructor(props: DefaultLayoutProps) {
    super(props)
    this.state = {
      openMenu: false
    }
  }

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
        <Header menuClicked={this.menuClicked} />
        <Drawer
          open={this.state.openMenu}
          onClose={() => { this.setState({ openMenu: false }) }}
        >
          <div style={{ width: 200 }}>
            <Link to="/"><MenuItem>홈</MenuItem></Link>
            <Link to="/about"><MenuItem>About</MenuItem></Link>
          </div>
        </Drawer>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 100,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }

  public menuClicked = (e: React.SyntheticEvent<MouseEvent>) => {
    this.setState({ openMenu: !this.state.openMenu })
  }
}

export default DefaultLayout
