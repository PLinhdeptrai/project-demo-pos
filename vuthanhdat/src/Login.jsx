import React from "react";

export const Login = (props) => {
    return(
        <div className="form-login">
            <div className="login-container">
                <div className="login-left">
                <h3 className="login-title" >ĐĂNG NHẬP</h3>
                <form className="login-form" >
                <label className="dis-bl login-label" htmlFor="Email">Email</label>
                <input className="dis-bl login-input" type="username" placeholder="Username" id="username" name="username" />
                <label className="dis-bl login-label" htmlFor="Password">Password</label>
                <input className="dis-bl login-input" type="password" placeholder="********" id="password" name="password" />
                <button className="login-submit" type="submit">Đăng nhập</button>
                </form>
                </div>
                <div className="login-right">

                </div>
            </div>
        </div>
    )
}