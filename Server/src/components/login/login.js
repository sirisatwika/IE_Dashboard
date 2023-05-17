import React from 'react'
import '../login/login.css';
import logo from '../../assets/logo.png';
import MailIcon from '../../assets/icons/mail_icon.svg';
import PasswordIcon from '../../assets/icons/password_icon.svg';
// import { useIsAuthenticated } from "@azure/msal-react";
// import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { useMsal } from "@azure/msal-react";
// import { loginRequest } from "../../authConfig";

const Login = () => {

    // const isAuthenticated = useIsAuthenticated();

    // const { instance } = useMsal();

    //Login redirect
    // const handleLogin = (loginType) => {
    //     if (loginType === "redirect") {
    //         instance.loginRedirect(loginRequest).catch((e) => {
    //             console.log(e);
                
    //         });
    //     }
    // };

    //Logout redirect
    // const handleLogout = (logoutType) => {
    //      if (logoutType === "redirect") {
    //         instance.logoutRedirect({
    //             postLogoutRedirectUri: "/",
    //         });
    //     }
    // };

    return (
        <div className="login-wrapper">
            <div className="login-left-wrapper"></div>
            <div className="login-right-wrapper">
                <div className='login-formblock'>
                    <div className="login-logo">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </div>
                    <div className="login-text">
                        <h1>Sign In</h1>
                        <p>Please enter your username and password to access the portal.</p>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="form-control">
                                <span><img src={MailIcon} alt="" /></span>
                                <input type="email" name="usermail" placeholder="User Name*" />
                            </div>
                            <div className="form-control">
                                <span><img src={PasswordIcon} alt="" /></span>
                                <input type="text" name="password" placeholder="Password*" />
                            </div>
                            <div className="login_remember">
                                <input type="checkbox" />
                                <p>Remember Me</p>
                            </div>
                            <input type="submit" value="Sign-in" className="loginsubmit" />
                            <div className="login_forgot">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </form>
                    </div>

                    {/* {isAuthenticated ?

                        <VpnKeyIcon onClick={() => handleLogout("redirect")} /> : <ExitToAppIcon onClick={() => handleLogin("redirect")} />} */}

                </div>
            </div>
        </div>
    )
}
export default Login;