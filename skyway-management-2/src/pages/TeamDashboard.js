import React from "react";

class TeamDashboard extends React.Component
{
    render()
   {
    
   
     return(

    
        <div class="page-body no-background">
        <div class="sidebar">
            <div class="sidebar-tab sidebar-current">Dashboard</div>
            <div class="sidebar-tab">Request History</div>
        </div>
        <div class="body-main tenant-body">
            <span  class="body-heading no-padding">Welcome, Maintanance Team</span>
            <span class="body-sub-heading no-padding no-margin">Pending Requests</span>
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

export default TeamDashboard;