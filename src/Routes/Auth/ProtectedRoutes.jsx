import {Route, Navigate} from "react-router-dom";
import App from "../../Pages/App";
import Login from "../../Pages/Auth/Login";
import LoggedInMiddleware from "../../App/Middlewares/Auth/LoggedInMiddleware";
import getUserFromCookie from "../../App/Helpers/getUserFromCookie";

const ProtectedRoutes = () => {
    const user = getUserFromCookie;

    return (
        <>
            <Route exact path="/home" element={
                <LoggedInMiddleware>
                    <App/>
                </LoggedInMiddleware>
            }/>


            <Route exact path="/login" element={
                user ? <Navigate replace to="/home"/> : <Login/>
            }/>
        </>
    )
}

export default ProtectedRoutes;