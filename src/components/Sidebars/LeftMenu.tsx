import * as React from 'react';
import { Drawer, MenuItem } from '@material-ui/core';

const LeftMenu = (leftOpen: boolean) => (
    <Drawer open={leftOpen} onClose={(e: any) => { this.handleMenuBtnClicked(false) }}>
        <div style={{ width: 200 }} >
            <MenuItem onClick={() => this.handleSideBtnClicked('/')}>홈</MenuItem>
            <MenuItem onClick={() => this.handleSideBtnClicked('/about')}>About</MenuItem>
        </div>
    </Drawer>
)

export default LeftMenu;