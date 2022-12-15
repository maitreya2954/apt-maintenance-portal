import React from "react";

class TenantDashboard extends React.Component
{
    render()
   {
     

     var userId = localStorage.getItem('login-id'),
        userDataJson = localStorage.getItem(userId + '-data'),
        userData = JSON.parse(userDataJson);
   
     return(

    
    <div class="page-body no-background">
        <div class="sidebar">
            <div class="sidebar-tab sidebar-current" onClick={(e) => {
                e.preventDefault();
                window.location = '/tenant';
            }}>Dashboard</div>
            <div class="sidebar-tab" onClick={(e) => {
                e.preventDefault();
                window.location = '/newrequest';
            }}>Add New Request</div>
            <div class="sidebar-tab" onClick={(e) => {
                e.preventDefault();
                window.location = '/tenant';
            }}>Request History</div>
        </div>
        <div class="body-main tenant-body">
            <span  class="body-heading">Welcome, Tenant</span>
            <div id="info-container">
                
                <div class="info-box">
                    <span>Tenant Information</span>
                    <div class="info-box-row">
                        <span>First Name</span>
                        <span>{userData.firstName}</span>
                    </div>
                    <div class="info-box-divider"></div>
                    <div class="info-box-row">
                        <span>Last Name</span>
                        <span>{userData.lastName}</span>
                    </div>
                    <div class="info-box-divider"></div>
                    <div class="info-box-row">
                        <span>Phone</span>
                        <span>{userData.phoneNumber}</span>
                    </div>
                    <div class="info-box-divider"></div>
                    <div class="info-box-row">
                        <span>Email</span>
                        <span>{userData.email}</span>
                    </div>
                    <div class="info-box-divider"></div>
                    <div class="info-box-row">
                        <span>SSN</span>
                        <span>{userData.ssn}</span>
                    </div>
                    <button>Edit Details</button>
                </div>
                <div class="info-box">
                    <span>Property Information</span>
                    <div class="info-box-row">
                        <span>Apartment</span>
                        <span>Skyway Apartments</span>
                    </div>
                    <div class="info-box-divider"></div>
                    <div class="info-box-row">
                        <span>Unit</span>
                        <span>{userData.aptUnit}</span>
                    </div>
                    <div class="info-box-divider"></div>
                    <div class="info-box-row">
                        <span>Address</span>
                        <span>Lititz, PA 17473</span>
                    </div>
                    <div class="info-box-divider"></div>
                    <div class="info-box-row">
                        <span>Manager </span>
                        <span>John Doe</span>
                    </div>
                    <div class="info-box-divider"></div>
                    <div class="info-box-row">
                        <span>Email</span>
                        <span>john@skywayapt.com</span>
                    </div>
                    <button>Email Manager</button>
                </div>
            </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

        </div>
    




        
);
}
}
export default TenantDashboard;