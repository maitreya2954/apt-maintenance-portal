import React from "react";

class Login extends React.Component
{
    render()
   {
     const styleObj1 = {
        fontSize: 40,
        fontWeight:700,
    
     }
   
     return(

    
            <div class="page-body">
                 <img id="background-img" alt="" src="D:\skyway-management-2\src\pages\images\brandon-griggs-wR11KBaB86U-uns.png"/> 
                <form id="login-container">
                    <span style={styleObj1}/*"font-size: 40px; font-weight: 700;"*/>Skyway Portal</span>
                    <div id="divider-line"></div>
                    <div id="sub-login-container">
                        <span>Email</span>
                        <input type="email"/>
                    </div>
                    <div id="sub-login-container">
                        <span>Password</span>
                        <input type="password"/>
                    </div>
                    <input id="login-button" type="submit" value="Login"/>
                </form>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    
            </div>
        
);
}
}
export default Login;