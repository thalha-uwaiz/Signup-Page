import React, { useState } from 'react';
import './Signin.scss';
import email_icon from '../Assets/email_icon.png';
import user_icon from '../Assets/user_icon.png';
import password_icon from '../Assets/password_icon.png';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

const Signin = () => {
    const [action, setAction] = useState("Login");
    // const [name, setName] = useState(""); // Added name state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            if (action === 'Login') {
                await signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log(userCredential);
                    });
                // User is signed in.
            } else if (action === 'Sign Up') {
                await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log("User registered with UID:", user.uid);

                    });
                // New user is signed up and logged in.
            }
        } catch (error) {
            // Handle authentication errors here
            console.error(error);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underLine'></div>
            </div>
            <form onSubmit={handleSignIn}>
                <div className='inputs'>
                    {action === "Login" ? (
                        <div></div>
                    ) : (
                        <div className='input'>
                            <img src={user_icon} alt='userIcon' />
                            <input type='text' name='name' placeholder='Name'/>
                        </div>
                    )}
                    <div className='input'>
                        <img src={email_icon} alt='emailIcon' />
                        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='passwordIcon' />
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {action === "Sign Up" ? (
                        <div></div>
                    ) : (
                        <div className='forgot-password'>
                            forgot password <span>click Here!</span>
                        </div>
                    )}
                    <div className='submit-container'>
                        <div
                            className={action === "Login" ? "submit gray" : "submit"}
                            onClick={() => setAction("Sign Up")}
                        >
                            Sign Up
                        </div>
                        <div
                            className={action === "Sign Up" ? "submit gray" : "submit"}
                            onClick={() => setAction("Login")}
                        >
                            Login
                        </div>
                        <div className='forgot'></div>
                        <button className="submitButton" type='submit' onSubmit={handleSignIn}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signin;
