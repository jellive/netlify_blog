import * as leftMenu from '../actions/LeftMenu'

const initialState: { open: any } = {
    open: leftMenu.LEFTMENUCLOSE
}

function menu(state = initialState, action: any) {
    switch (action.type) {
        case leftMenu.LEFTMENUOPEN:
            return {
                ...state,
                open: leftMenu.LEFTMENUOPEN
            }
        case leftMenu.LEFTMENUCLOSE:
            return {
                ...state,
                open: leftMenu.LEFTMENUCLOSE
            }
            default:
            return state
    }
}

export default menu