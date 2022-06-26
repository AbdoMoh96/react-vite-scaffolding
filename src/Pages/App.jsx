import { useState } from 'react'
import logo from '../Resources/Images/svg/logo.svg'
import '../Resources/Css/pages/app/App.css'
import {useDispatch} from "react-redux";
import {increment} from "../App/Redux/Counter/Slices/counterSlice";
import counterValueSelector from "../App/Redux/Counter/Selectors/counterValueSelector";
import userSelector from "../App/Redux/User/Selectors/userSelector";

function App() {
  const count = counterValueSelector();
  const dispatch = useDispatch();
  const user = userSelector();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())} >
            count is: {count}
          </button>
        </p>

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <h1>Welcome {user.firstName} your token is {user.token}</h1>
      </header>
    </div>
  )
}

export default App
