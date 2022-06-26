import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "../../../Api/customersApi/example";
import Cookie from "js-cookie";


export const userLogin = createAsyncThunk('user/userLogin', async (data) => {
    const res = await axios.post('/tokens/create', data);
    Cookie.set('user', JSON.stringify(res.data.user), {secure: true});
    return res.data.user;
});

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    token: '',
    isLoggedIn: false,
    isLoggingIn: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.isLoggedIn = true;
            state.firstName = action.payload.first_name;
            state.lastName = action.payload.last_name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.isLoggedIn = false;
            state.isLoggingIn = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isLoggingIn = false;
            state.isLoggedIn = true;
            state.firstName = action.payload.first_name;
            state.lastName = action.payload.last_name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        [userLogin.rejected]: (state) => {
            state.isLoggedIn = false;
        },
    }
});

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;