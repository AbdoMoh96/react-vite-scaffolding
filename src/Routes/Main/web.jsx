import { Routes , Route , Navigate  } from "react-router-dom";
import App from "../../Pages/App";

const MainRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
           {/* <Route path="/home" element={<App/>} />*/}
        </Routes>
    )
}

export default MainRoutes;