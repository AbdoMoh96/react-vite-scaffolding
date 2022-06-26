import { combineReducers } from '@reduxjs/toolkit';
import userSlice from "./Slices/userSlice";


export default combineReducers({
    user : userSlice
});