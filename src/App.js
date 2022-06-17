import { useMoralis } from 'react-moralis';
import './App.css';
import './components/spinner';
import Spinner from './components/spinner';
import SignUp from './components/signUp';
import Login from './components/login';

function App() {
 const {authenticate, isAuthenticated, isAuthenticating,logout, authError,user } = useMoralis();
 
 console.log(process.env.REACT_APP_APP_ID_MORALIS)

 if (isAuthenticated) {
  return (
    <div className='App-header'>
      <h1>Welcome!</h1>
      <div>
          <button className='button' onClick={() => logout()}>Logout</button>
        </div>
    </div>
  )
 }
 
 if (isAuthenticating) {
    return (
      <Spinner/>
    )
 }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Moralis - React</h1>
        <div className='content'>
          <SignUp/>
          <Login/>
          <div className='form'>
            <h4>MetaMask</h4>
            <button className='button' onClick={() => authenticate()}>Authenticate</button>
          </div>
        </div>
        {
          authError && (
            <div className='auth-error'> 
              <h4>Authenticate has failed</h4>
              {authError.message}
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
