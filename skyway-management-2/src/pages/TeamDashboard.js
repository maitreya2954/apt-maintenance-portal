import React from "react";
import $ from 'jquery';

class TeamDashboard extends React.Component {
    render() {
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }
        function formatDate(millis) {
            var date = new Date(millis);
            return [
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate()),
                date.getFullYear(),
            ].join('/');
        }
        var pendingrequests = [];
        $.ajax({
            url: 'http://localhost:8080/request/allpending',
            type: 'GET',
            async: false,
            success: (resp) => {
                pendingrequests = resp;
            }
        });
        return (
            <div class="page-body no-background">
                <div class="sidebar">
                    <div class="sidebar-tab sidebar-current" onClick={(e) => {
                        e.preventDefault();
                        window.location = '/team';
                    }}>Dashboard</div>
                    <div class="sidebar-tab" onClick={(e) => {
                        e.preventDefault();
                        window.location = '/teamhistory';
                    }}>Request history</div>
                </div>
                <div class="body-main tenant-body">
                    <span class="body-heading no-padding">Welcome, Maintanance Team</span>
                    <span class="body-sub-heading no-padding no-margin">Pending Requests</span>
                    <div class="request-table height-70percent">
                        <div class="request-table-row table-header">
                            <div class="request-table-cell col1 white-bck-color">Name</div>
                            <div class="request-table-cell col2 white-bck-color">Start Date</div>
                            <div class="request-table-cell col3 white-bck-color">Status</div>
                        </div>
                        <div class="request-table-overflow">
                            {pendingrequests.map(req => {
                                return (<div class="request-table-row" onClick={(e) => {
                                    e.preventDefault();
                                    this.props.navigation.navigate('/team/requestview', {
                                        reqId:1
                                    })
                                    window.location = '/team/requestview?reqId=1';
                                }}>
                                    <div class="request-table-cell col1">{req.title}</div>
                                    <div class="request-table-cell col2">{formatDate(req.startMillis)}</div>
                                    <div class="request-table-cell col3">{req.status == 2 ? 'Pending' : 'Other'}</div>

                                </div>);
                            })}

                        </div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </div>

        );
    }
}

export default TeamDashboard;