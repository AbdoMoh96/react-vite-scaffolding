import {Routes, Route, Navigate} from "react-router-dom";
import App from "../../Pages/App";
import Login from "../../Pages/Auth/Login";
import LoggedInMiddleware from "../../App/Middlewares/Auth/LoggedInMiddleware";
import userSelector from "../../App/Redux/User/Selectors/userSelector";

const ProtectedRoutes = () => {
    const user = userSelector();

    return (
        <Routes>
            <Route path="/home" element={
                <LoggedInMiddleware>
                    <App/>
                </LoggedInMiddleware>
            }/>


            <Route path="/login" element={
                <Login/>
            }/>
        </Routes>
    )
}

export default ProtectedRoutes;