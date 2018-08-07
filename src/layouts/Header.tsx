import * as React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import Link from "gatsby-link"
require("./prism.css")

const Header = (props: { menuClicked: (e: any) => void }): JSX.Element => (
  <AppBar>
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={props.menuClicked}>
        <MenuIcon />
      </IconButton>
      <Typography variant="title" style={{ flex: 1 }} color="inherit"><Link to="/">Jell의 세상 사는 이야기.</Link></Typography>
    </Toolbar>
  </AppBar>
)

export default Header
