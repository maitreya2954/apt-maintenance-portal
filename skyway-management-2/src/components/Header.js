import React from "react";
import { NavLink,Link} from "react-router-dom";

class Header extends React.Component
{
    
    
    render()
   {
    
     
     return(

        
        <header>
            <div class="page-header">
                <img id="skywaylogo"  src="..\pages\images\Screenshot_2022-11-24_at_90258.png"/>
                <div class="header-button-container">
                    <button class="headerbutton"Link to="/contact">Contact Us 
                    
                    </button>
                    <button class="headerbutton">About Us</button>
                    <button class="headerbutton">Login</button>
                    

                </div>
            </div>
            </header>
);
}
}
export default Header;