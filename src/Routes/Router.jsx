import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Main/web";
import ProtectedRoutes from "./Auth/ProtectedRoutes";

const Router = () => {
    return(
        <BrowserRouter>
            <MainRoutes/> {/*main website routes*/}
            <ProtectedRoutes/> {/*protected routes*/}
        </BrowserRouter>
    )
}

export default Router;