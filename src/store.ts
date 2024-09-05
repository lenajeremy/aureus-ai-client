import { configureStore, Middleware } from "@reduxjs/toolkit";
import authApi from "./api/authApi";

const middleware: Middleware[] = [
    authApi.middleware
]

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware(getDefaultMiddleware) {
        // @ts-ignore
        return getDefaultMiddleware(middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store