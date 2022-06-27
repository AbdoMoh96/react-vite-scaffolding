import {Routes, BrowserRouter} from "react-router-dom";
import MainRoutes from "./Main/web";
import ProtectedRoutes from "./Auth/ProtectedRoutes";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {MainRoutes()} {/*main website routes*/}
                {ProtectedRoutes()} {/*protected routes*/}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;