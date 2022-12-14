import React from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {


    render() {


        return (


            <header>
                <div className="page-header">
                    <img id="skywaylogo" src={require("../pages/images/Screenshot_2022-11-24_at_90258.png")} />
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
export default Header;