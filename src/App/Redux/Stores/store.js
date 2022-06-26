import { configureStore } from '@reduxjs/toolkit';
import reducers from "../Counter/reducers";
import userReducers from "../User/reducers";

export const store = configureStore({
    reducer: {
        reducers,
        userReducers
    },
    devTools : process.env.NODE_ENV === 'development'
});

export default store;