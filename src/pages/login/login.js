import React from 'react';
import './login.css';


const loginPage = () => {

    return (
        <div>
            <div className="container">
                <div className="logo">Login to handy</div>
                <div className="login-item">
                    <form className="form form-login">
                        <div className="form-field">
                            <div>Email</div>
                            <input className="form-input" placeholder="Username"></input>
                        </div>
                        <div className="form-field">
                            <div>Password</div>
                            <input className="form-input" placeholder="Password"></input>
                        </div>
                        <div>Forgot password?</div>
                        <button className="button">Login</button>
                        
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default loginPage;