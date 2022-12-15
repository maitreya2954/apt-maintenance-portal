import React from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component{
    render()
    {
        
        var isLoggedOut = localStorage.getItem('login-id') === null  || localStorage.getItem('login-id') === undefined;
        return(!isLoggedOut ? <LoginHeader/> : <HomeHeader/>);
    }
}
class HomeHeader extends React.Component {


    render() {
        

        return (


            <header>
                <div className="page-header">
                    <img id="skywaylogo" src={require("../pages/images/Screenshot_2022-11-24_at_90258.png")} onClick={(e) => {
                            e.preventDefault();
                            window.location = "/";
                        }} />
                    <div className="header-button-container">

                        <button className="headerbutton" onClick={(e) => {
                            e.preventDefault();
                            window.location = "/contact";
                        }}>Contact Us</button>
                        <button className="headerbutton" onClick={(e) => {
                            e.preventDefault();
                            window.location="/about";
                        }}>About Us</button>
                        <button className="headerbutton" onClick={(e) => {
                            e.preventDefault();
                            window.location="/login";
                        }}>Login</button>


                    </div>
                </div>
            </header>
        );
    }
}

class LoginHeader extends React.Component {


    render() {


        return (


            <header>
                <div class="page-header">
            <img id="skywaylogo" src={require("../pages/images/Screenshot_2022-11-24_at_90258.png")} onClick={(e) => {
                            e.preventDefault();
                            var login_info = localStorage.getItem('login-id');
                            console.log('Login detected: ' + login_info);
                            if (login_info) {
                                localStorage.removeItem('login-id');
                                localStorage.removeItem(login_info+'-data');
                            }
                            window.location = "/";
                        }}/>
            <div class="portal-header-container">
                <img src={require("../pages/images/icons8-notification-64.png")} alt="" onClick={(e) => {
                            e.preventDefault();
                            window.location = "/";
                        }}/>
                <img src={require("../pages/images/icons8-power-off-button-100.png")} alt="" onClick={(e) => {
                            e.preventDefault();
                            var userId = localStorage.getItem('login-id');
                            localStorage.removeItem('login-id');
                            localStorage.removeItem(userId+'-data');
                            window.location = "/login";
                        }}/>
            </div>
        </div>
            </header>
        );
    }
}
export default Header;