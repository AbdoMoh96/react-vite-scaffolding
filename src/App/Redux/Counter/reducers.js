import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from "./Slices/counterSlice";


export default combineReducers({
   counter : counterSlice
});