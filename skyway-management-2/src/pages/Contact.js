import React from "react";

class Contact extends React.Component
{
    render()
   {
     const styleObj1 = {
        fontSize: 40,
        fontWeight:700,
    
     }
     const styleObj2 = {
       height: 480,
    
     }
     return(

        
            <div class="page-body">
             <img id="background-img" alt="" src="D:\skyway-management-2\src\pages\images\brandon-griggs-wR11KBaB86U-uns.png"/> 
                <div id="contactus-container" style={styleObj2} /* style={{"height: 80vh"}}*/ >
                    <span style={styleObj1} /*style="font-size: 40px; font-weight: 700;"*/>Contact Us</span>
                    <div id="divider-line"></div>
                    <div id="aboutus-content">
                        <span>Office – Dauphin County<br/>
                        116 North Swarthmore Avenue, Suite 1<br/>
                        Harrisburg, PA 19078<br/>
                        Phone: (717) 444-0110<br/>
                        <br/>
                        Marketing Manager:<br/>
                        John Doe<br/>
                        john@skywaymgmt.com<br/>
                        <br/>
                        Property Manager:<br/>
                        Mike Ross<br/>
                        mike@skywaymgmt.com</span>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    
            </div>
        
     );
}
}
export default Contact;