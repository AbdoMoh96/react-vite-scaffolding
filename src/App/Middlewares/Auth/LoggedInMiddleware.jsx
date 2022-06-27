import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser} from "../../Redux/User/Slices/userSlice";
import userSelector from "../../Redux/User/Selectors/userSelector";
import getUserFromCookie from "../../Helpers/getUserFromCookie";


const LoggedInMiddleware = ({children}) => {
    const dispatch = useDispatch();
    const userState = userSelector();
    const userCookie = getUserFromCookie;


    if (userCookie !== null && userState.isLoggedIn !== true) {
        dispatch(updateUser(userCookie));
        return children;
    } else if (userState.isLoggedIn === true) {
        return children;
    } else {
        return <Navigate to="/login"/>;
    }
}


export default LoggedInMiddleware