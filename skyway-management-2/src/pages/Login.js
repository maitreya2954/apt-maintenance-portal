import React from "react";
import $ from 'jquery';

class Login extends React.Component {
    render() {
        const styleObj1 = {
            fontSize: 40,
            fontWeight: 700,

        }
        return (


            <div className="page-body">
                <img id="background-img" alt="" src="D:\skyway-management-2\src\pages\images\brandon-griggs-wR11KBaB86U-uns.png" />
                <form name='loginform' id="login-container" onSubmit={(e) => {
                    e.preventDefault();
                    var inputs = document.getElementsByTagName("input");
                    for (var i = 0; i < inputs.length; i++) {
                        inputs[i].disabled = false;
                    }
                    var formdata = $('#login-container').serialize();
                    $.ajax({
                        url: 'http://localhost:8080/portal/login?' + formdata,
                        type: 'GET',
                        success: (resp) => {
                            localStorage.setItem('login-id', resp.userId);
                            localStorage.setItem(resp.userId+'-data', JSON.stringify(resp));
                            if (resp.role == 0) {
                                window.location="/tenant";
                            } else if(resp.role == 1) {
                                window.location='/manager';
                            } else{
                                window.location='/team';
                            }
                        }
                    });
                }}>
                    <span style={styleObj1}/*"font-size: 40px; font-weight: 700;"*/>Skyway Portal</span>
                    <div id="divider-line"></div>
                    <div id="sub-login-container">
                        <span>User ID</span>
                        <input type="text" name="userid" />
                    </div>
                    <div id="sub-login-container">
                        <span>Password</span>
                        <input type="password" name="pass" />
                    </div>
                    <input id="login-button" name="submit" type="submit" value="Login" />
                </form>

            </div>

        );
    }
}
export default Login;