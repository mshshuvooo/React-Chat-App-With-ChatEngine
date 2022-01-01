import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from '../FirebaseConfig';

const Login = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <>
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Unichat</h2>

                <button className="login-button google" onClick={signInWithGoogle}>
                    <GoogleOutlined />
                    <span>Sign in with Google</span>
                </button>
                <button className="login-button facebook" onClick={signInWithFacebook}>
                    <FacebookOutlined />
                    <span>Sign in with Facebook</span>
                </button>
            </div>
        </div>
        </>
    );
};

export default Login;