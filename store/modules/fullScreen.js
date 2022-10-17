import { createSlice } from "@reduxjs/toolkit"

const fullScreen = createSlice({
    name: 'fullScreen',
    initialState: {
        fullScreen: false
    },
    reducers: {
        setFullScreen(state, action) {
            //console.log(state, action.payload)
            state.fullScreen = action.payload
        }
    }
})

export const { setFullScreen } = fullScreen.actions

export default fullScreen.reducer