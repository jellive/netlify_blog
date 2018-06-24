import * as React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"

const Header = (props: { menuClicked: (e: any) => void }): JSX.Element => (
  <AppBar>
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={props.menuClicked}>
        <MenuIcon />
      </IconButton>
      <Typography variant="title" style={{ flex: 1 }} color="inherit">Jell의 세상 사는 이야기.</Typography>
    </Toolbar>
  </AppBar>
)

export default Header
