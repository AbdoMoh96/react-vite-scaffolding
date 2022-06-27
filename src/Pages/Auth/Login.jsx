import {useState, useEffect} from 'react';
import userSelector from "../../App/Redux/User/Selectors/userSelector";
import {userLogin} from "../../App/Redux/User/Slices/userSlice";
import {useDispatch} from "react-redux";
import logo from "../../Resources/Images/svg/logo.svg";
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const [form, register] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = userSelector();

    useEffect(() => {
        user.isLoggedIn && navigate('/home');
    }, [user.isLoggedIn]);

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(userLogin(form));
        // register({}); to clear all the form inputs
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>

                <form autoComplete="off" onSubmit={onSubmit}>
                    <input type='email'
                           value={form.email ?? ''}
                           placeholder='email'
                           onChange={(e) => register(
                               {...form, email: e.target.value})
                           }
                    />
                    <input
                        type='password'
                        value={form.password ?? ''}
                        placeholder='password'
                        onChange={(e) => register(
                            {...form, password: e.target.value})
                        }
                    />

                    <h1>{}</h1>

                    {user.isLoggingIn && <h1>Loading....</h1>}

                    <button type='submit'>Login</button>
                </form>

                <p>
                    Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    );
}

export default Login;