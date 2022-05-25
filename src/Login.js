import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './components/Login.css'
import { auth} from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((auth)=>{
            
            history.push('/');
        }).catch(error => alert(error.message));
        

    }
    const register = (e) =>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            console.log(auth);
            if(auth)
                history.push('/');
        }).catch(error => alert(error.message));
    }

    return (
        <div className = 'login'>
            <Link to = '/'>
                <img className = 'loginLogo' src = 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt = 'amazon-logo' />
            </Link>
            <div className = 'loginForm'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type = 'email' value = {email} onChange = {e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type = 'password' value = {password} onChange = {e => setPassword(e.target.value)} />
                    <button type = 'submit' className = 'loginSignInBtn' onClick = {signIn}>Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <hr />
                <h5>New to Amazon</h5>
                <button type = 'submit' className = 'loginSignUpBtn' onClick = {register}>Create an account</button>
            </div>
        </div>
    )
}

export default Login
