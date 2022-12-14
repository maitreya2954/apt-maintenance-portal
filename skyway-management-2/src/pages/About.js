import React from "react";


class About extends React.Component
{
    render()
   {
     const styleObj1 = {
        fontSize: 40,
        fontWeight:700,
    
     }
     return(
      <body>
      <div class="page-container">
       // <div class="page-header">
            <img id="skywaylogo" src="D:\skyway-management-2\src\pages\images\Screenshot_2022-11-24_at_90258.png" alt=""/>
            <div class="header-button-container">
                <button class="headerbutton">Contact Us</button>
                <button class="headerbutton current-tab">About Us</button>
                <button class="headerbutton">Login</button>
            </div>
        </div>
        <div class="page-body">
            <div id="aboutus-container">
                <span style={styleObj1}/*style="font-size: 40px; font-weight: 700;"*/>About Skyway Management</span>
                <div id="divider-line"></div>
                <div id="aboutus-content">
                    <span>Skyway Management is Pennsylvania’s premier maintenance management company. Our mission is to maximize the experience of all the stockholders of apartment maintenance which allows us to enhance the quality of life of the residents and provide the apartment staff with opportunities of growth and accomplishment.</span>
                    <br/>
                    <span>We expect to maintain and grow portfolios in markets that profitably support our mission as economic conditions permit.</span>
                    <br/>
                    <span>We are proud of our success in a diverse portfolio of investment ventures. For more information on investment opportunities or if interested in our third-party management services, please contact us today.</span>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

</body>
);
}
}
export default About;