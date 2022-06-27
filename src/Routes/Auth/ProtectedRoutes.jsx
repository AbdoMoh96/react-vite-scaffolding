import {Navigate, Route} from "react-router-dom";
import App from "../../Pages/App";
import Login from "../../Pages/Auth/Login";
import LoggedInMiddleware from "../../App/Middlewares/Auth/LoggedInMiddleware";
import {getUserFromLocalStorage} from "../../App/Helpers/helper";

const ProtectedRoutes = () => {
    return (
        <>
            <Route exact path="/home" element={
                <LoggedInMiddleware>
                    <App/>
                </LoggedInMiddleware>
            }/>


            <Route exact path="/login" element={
                getUserFromLocalStorage ? <Navigate replace to="/home"/> : <Login/>
            }/>
        </>
    )
}

export default ProtectedRoutes;