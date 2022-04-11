// import React from 'react'
// import Header from './components/Header'
// import Home from './components/Home';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className='App'>
//       <Header/>
//       <Home/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
import React,{useState,useEffect} from 'react'
import Home from "./pages/home";
import Feature from "./pages/features/feature";
import Signup from "./pages/signup";
import Login from "./pages/login_pg";

import Header from "./components/Header"
import Footer from "./components/Footer";
import TypingHome from "./pages/features/typingHome"
import TypingGame from "./pages/features/typingGame"
import TypingResult from "./pages/features/typingResult"
import Profile from "./pages/profile"
import ImageQuiz from "./pages/features/ImageQuiz"
// import MemoryGame from "./pages/features/memoryGame"


// import history  from './history';

import {  Route, Routes,useNavigate,Navigate} from "react-router-dom";


const  App = ()=>{

  const [auth,setAuth] = useState(false);
  const [userId,setUserId] = useState(null);
  const [token,setToken] = useState(null);
  const [error,setError] = useState(null);
  let navigate = useNavigate();
 

   useEffect(()=>{ 
    const tok = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!tok || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const userI = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
      setAuth(true);
      setToken(tok);
      setUserId(userI);
      setAutoLogout(remainingMilliseconds);
  },[]
   )

  const logoutHandler = () => {
    setAuth(false);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };

  const loginHandler = (event, authData) => {
    event.preventDefault();
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
          navigate("/login_pg")
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
          navigate("/login_pg")
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        setAuth(true);
        setToken(resData.token);
        setUserId(resData.userId);
        navigate('/');
        localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        setAutoLogout(remainingMilliseconds);
      })
      .catch(err => {
        console.log(err);
        setAuth(false);
        setError(err);
        navigate("/login_pg")
      });
  };

  const signupHandler = (event, authData) => {
    event.preventDefault();
    fetch('http://localhost:8080/auth/signup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        name: authData.name
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        setAuth(false);
        navigate("/login_pg")
      })
      .catch(err => {
        console.log(err);
        setAuth(false);
        setError(err);
      });
  };

 const setAutoLogout = milliseconds => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };






  return (


     
    <div>
     
      
        <Header auth={auth} />
        <Routes>
          <Route path= "/" exact element = {<Home/>}></Route>
          <Route path="/feature" exact element={<Feature />}></Route>
          <Route path="/typingHome" exact element={<TypingHome />}></Route>
          <Route path="/typingGame" exact element={<TypingGame token={token} />}></Route>
          <Route path="/typingResult" exact element={<TypingResult />}></Route>
          <Route path="/signup" exact element={<Signup  onSignup={signupHandler}/>}></Route>
          <Route path="/login_pg" exact element={<Login onLogIn={loginHandler} />}></Route>
          <Route path="/profile" exact element={<Profile userId={userId} token={token} />}></Route>
          <Route path="/imagequiz" exact element={<ImageQuiz token={token} userId={userId} />}></Route>
          {/* <Route path="/memorygame" exact element={<MemoryGame token={token} userId={userId} />}></Route> */}

          
        </Routes>
        <Footer/>

      
      
    </div>
  );



  
  
}



export default App;