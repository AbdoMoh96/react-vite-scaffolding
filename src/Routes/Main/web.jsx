import {Route, Navigate} from "react-router-dom";

const MainRoutes = () => {

    return (
        <>
            <Route path="/" element={<Navigate replace to="/home"/>}/>
        </>
    )
}

export default MainRoutes;