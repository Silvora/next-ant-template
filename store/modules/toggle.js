import { createSlice } from "@reduxjs/toolkit"

const toggle = createSlice({
    name: 'toggle',
    initialState: {
        collapsed: true
    },
    reducers: {
        setCollapsed(state, action) {
            //console.log(state, action.payload)
            state.collapsed = action.payload
        }
    }
})

export const { setCollapsed } = toggle.actions

export default toggle.reducer