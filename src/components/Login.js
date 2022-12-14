import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import { auth } from "../firebase";
import "./login.css";
const Login = () => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e)=>{
      e.preventDefault()
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                navigate('/')
            })
            .catch(error=>alert(error.message))
    }

    const register = (e)=>{
      e.preventDefault()
      auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth)=>{
            
            if (auth) {
              navigate('/')
            }

          })
          .catch(error=>alert(error.message))
    }
  return (
    <div className="login">
    <Link to='/'>

      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="login_logo"
      />
    </Link>
    <div className="login__container">
        <h1>Sign-in</h1>
        <form>
        <h5>Email</h5>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)}  />
        <h5>Password</h5>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
        </form>
        <p>
            By signing-in you agree to Amazon Fake Clone Conditions of Use & sale.
            Please see our privacy notice, our Cookies Notice
            and our Interest-Based Ads Notice.

        </p>
        <button onClick={register} className="login__registerButton">Create Your Account</button>
    </div>

    </div>
  );
};

export default Login;
