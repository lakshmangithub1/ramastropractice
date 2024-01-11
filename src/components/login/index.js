import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Logging in with:', emailOrPhone, password);
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleGoogleSignIn = () => {
    console.log('Signing in with Google');
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p className="sign-up-link" onClick={handleSignUp}>Sign up</p>
        <div className="or-separator">
          <span className="line"></span>
          <span className="or-text">OR</span>
          <span className="line"></span>
        </div>
        <button className="google-sign-in" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
