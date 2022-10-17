import { configureStore } from "@reduxjs/toolkit"
import toggle from "./modules/toggle"
import fullScreen from "./modules/fullScreen"

export default configureStore({
    reducer: {
        toggle,
        fullScreen
    }
})
