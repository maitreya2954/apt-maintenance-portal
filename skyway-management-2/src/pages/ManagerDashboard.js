import React from "react";

class ManagerDashboard extends React.Component
{
    render()
   {
     const styleObj1 = {
        fontSize: 40,
        fontWeight:700,
    
     }
   
     return(

    
        // <div class="page-container">
        // <div class="page-header">
        //     <img id="skywaylogo" src="images/Screenshot_2022-11-24_at_90258.png">
        //     <div class="portal-header-container">
        //         <img src="images/icons8-notification-64.png" alt="">
        //         <img src="images/icons8-power-off-button-100.png" alt="">
        //     </div>
        // </div>
        <div class="page-body no-background">
            <div class="sidebar">
                <div class="sidebar-tab sidebar-current">Dashboard</div>
            </div>
            <div class="body-main tenant-body">
                <span  class="body-heading no-padding">Welcome, Manager</span>
                <form id="manager-search-form">
                    <input id="manager-search-bar" type="search" placeholder="Search name or apt#..."/>
                </form>
                <div class="request-table height-70percent">
                    <div class="request-table-row table-header">
                        <div class="request-table-cell col1 white-bck-color">Name</div>
                        <div class="request-table-cell col2 white-bck-color">Apt#</div>
                        <div class="request-table-cell col3 white-bck-color">Type</div>
                    </div>
                    <div class="request-table-overflow">
                        <div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div>
                        <div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div><div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div><div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div><div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div><div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div><div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div><div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div><div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div><div class="request-table-row">
                            <div class="request-table-cell col1">Title1</div>
                            <div class="request-table-cell col2">Date1</div>
                            <div class="request-table-cell col3">Status1</div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>


        </div>
    
    
    


        
);
}
}
export default ManagerDashboard;