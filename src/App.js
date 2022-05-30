import { Home } from './components/home/Home';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/home/Login';
import Register from './components/home/Register';
import Private from './components/home/Private';
import authService from './components/services/auth-service';

function App() {
    const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(()=>{
    const user= authService.getCurrentUser();
    if(user){
      setCurrentUser(user)
    }
  },[])

  const logOut = ()=>{
    authService.logout();
  }
  return (
    <div className="App">
      <nav className='nav'>
        <div>
          <li>
            <Link className='letters' to={'/'}> Home </Link>
          </li>
        </div>
        {currentUser?(
          <div>
            <li>
             <a className='letters' href='/login' onClick={logOut}>
               Logout
               </a>
            </li>
            <li>
              <Link className='letters' to={'private'}>Private</Link>
            </li>
          </div>
        ):(
          <div>
            <li>
              <Link  className='letters' to={'/Login'}> Login </Link>  
            </li>
            <li>
              <Link className='letters' to ={'/register'}> Register </Link></li>
          </div>
        )}
      </nav>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/login' element={<Login/>}/>
       <Route exact path='/register' element={<Register/>}/>
       <Route exact path='/private' element={<Private/>}/>
     </Routes>
    </div>
  );
}

export default App;
