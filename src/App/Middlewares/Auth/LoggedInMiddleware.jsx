import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser} from "../../Redux/User/Slices/userSlice";
import userSelector from "../../Redux/User/Selectors/userSelector";
import {getUserFromLocalStorage} from "../../Helpers/helper";


const LoggedInMiddleware = ({children}) => {
    const dispatch = useDispatch();
    const userState = userSelector();
    const userLocal = getUserFromLocalStorage;


    if (userLocal !== null && userState.isLoggedIn !== true) {
        dispatch(updateUser(userLocal));
        return children;
    } else if (userState.isLoggedIn === true) {
        return children;
    } else {
        return <Navigate to="/login"/>;
    }
}


export default LoggedInMiddleware