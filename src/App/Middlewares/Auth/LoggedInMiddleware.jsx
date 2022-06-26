import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLogin, updateUser} from "../../Redux/User/Slices/userSlice";
import userSelector from "../../Redux/User/Selectors/userSelector";
import Cookie from "js-cookie";


function LoggedInMiddleware({children, loginRedirect = false}) {
    const dispatch = useDispatch();
    const userState = userSelector();
    const user = JSON.parse(Cookie.get('user') ?? null);


    if (user !== null && userState.isLoggedIn !== true) {
        dispatch(updateUser(user));
        return children;
    } else if (userState.isLoggedIn === true) {
        return children;
    } else {
        return <Navigate to="/login"/>;
    }
}


export default LoggedInMiddleware