import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./Pages/App";
import './Resources/Css/pages/app/index.css'
import {Provider} from "react-redux";
import Store from "./App/Redux/Stores/store";
import Router from "./Routes/Router";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={Store}>
            <Router/>
        </Provider>
    </React.StrictMode>
)
