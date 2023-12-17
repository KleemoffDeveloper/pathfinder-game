import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      setEmail('');
      setPassword('');
      setError('');
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Wrong password. Please try again.');
    }
  };

  const handleReset = () => {
    navigate("/reset")
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  return (
    <>
      <div className={`blur-bg-overlay`}></div>
      <div className="form-popup">
        <div className="form-box login">
          <div className="form-details">
            <h2>Welcome Back</h2>
            <p>Level up your connection! Log in with your epic credentials and stay plugged into the gaming universe</p>
          </div>
          <div className="form-content">
            <h2>LOGIN</h2>
            <form action="#" onSubmit={signIn}>
              <div className="input-field">
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label>Password</label>
                {error && <p className="error-message">{error}</p>}
              </div>
              <Link onClick={handleReset} to="/reset" className="forgot-pass">
                Forgot password?
              </Link>
              <button type="submit">Log In</button>
              <div className="bottom-link">
                Don't have an account?
                <Link to="/signup"> Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
