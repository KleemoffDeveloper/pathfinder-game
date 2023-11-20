import { Link } from 'react-router-dom'
import React, { useState } from "react"
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Signup() {
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const signUp = (e) => {
        e.preventDefault();
        if (!checked) {
            console.log("Please agree to the terms and conditions.");
            return;
        }

        createUserWithEmailAndPassword(auth, newEmail, newPassword)
            .then((useCredential) => {
                console.log(useCredential);
                setNewEmail("");
                setNewPassword("");
                setChecked(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="blur-bg-overlay"></div>
            <div className="form-popup">
                <div className="form-box signup">
                    <div className="form-details">
                        <h2>Create Account</h2>
                        <p>To become a part of our community, please sign up using your personal information</p>
                    </div>
                    <div className="form-content">
                        <h2>SIGNUP</h2>
                        <form action="#" onSubmit={signUp}>
                            <div className="input-field">
                                <input
                                    type="text"
                                    required
                                    autoComplete="email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                />
                                <label>Enter your Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    type="password"
                                    required
                                    autoComplete="new-password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <label>Create Password</label>
                            </div>
                            <div className="policy-text">
                                <input
                                    type="checkbox"
                                    id="policy"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                />
                                <label htmlFor="policy">
                                    I agree with the
                                    <a href="#"> Terms & Conditions</a>
                                </label>
                            </div>
                            <button type="submit">Sign Up</button>
                            <div className="bottom-link">
                                Already have an account?
                                <Link to="/login"> Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
