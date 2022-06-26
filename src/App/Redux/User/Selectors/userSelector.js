import {useSelector} from "react-redux";

const userSelector = () => {
    return useSelector((state) => state.userReducers.user);
}

export default userSelector;