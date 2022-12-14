import React from "react";


class Home extends React.Component
{
    render()
   {
    const styleObj1 = {
        fontSize: 40,
    
    }
    const styleObj2 = {
        fontSize: 30,
    
    }
    const styleObj3 = {
        fontSize: 28,
        fontWeight: 300,
    
    }
        return (
            
           
        <div class="page-body">
             <img id="background-img" src="D:\skyway-management-2\src\pages\images\brandon-griggs-wR11KBaB86U-uns.png" alt=""/> 
            <div id="home-text">
                <span style={styleObj1}/*style="font-size:40px;"*/ >Welcome to Skyway!</span>
                <br/>
                <span style={styleObj2}/*style="font-size:30px;"*/ >Pennsylvania’s Premier Property Management Company</span>
                <br/>
                <span style={styleObj3}/*style="font-size: 28px; font-weight: 300;"*/ >At Skyway Management, Inc., we serve as a trusted manager of 
                    apartments, student housing, commercial buildings, office space, 
                    homeowners associations throughout the 
                    state of Pennsylvania. Our decades of property management 
                    experience and the many different types of management services we 
                    offer, give us a unique perspective on caring for residents, tenants, 
                    and owners.</span>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    
        </div>
    
    
    
        );

    }
}

export default Home;