import React from "react";
import $ from 'jquery';

class RequestStatusUpdate extends React.Component {
    render() {

        function getLocation(loc) {
            if (loc == 0) {
                return 'Living Area';
            } else if (loc == 1) {
                return 'Bathroom';
            } else if (loc == 2) {
                return 'Kitchen';
            } else if (loc == 3) {
                return 'Bedroom';
            } else if (loc == 4) {
                return 'Laundry';
            } else {
                return 'Other';
            }
        }

        function getStatus(status) {
            if (status == 0) {
                return "UNKNOWN";
            } else if (status == 1) {
                return "OPENED";
            } else if (status == 2) {
                return "PENDING";
            } else if (status == 3) {
                return "CLOSED";
            }
        } 
        var request = null;
        $.ajax({
            url: 'http://localhost:8080/request/id'+window.location.search,
            type: 'GET',
            async: false,
            success: (resp) => {
                request = resp;
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
                    <span class="body-heading">Request Description</span>
                    <div id="info-container">

                        <div class="info-box">
                            <div class="info-box-row">
                                <span>Title</span>
                                <span>{request.title}</span>
                            </div>
                            <div class="info-box-divider"></div>
                            <div class="info-box-row">
                                <span>Location</span>
                                <span>{getLocation(request.location)}</span>
                            </div>
                            <div class="info-box-divider"></div>
                            <div class="info-box-row">
                                <span>Status</span>
                                <span>{getStatus(request.status)}</span>
                            </div>
                            <div class="info-box-divider"></div>
                            <div class="info-box-row">
                                <span>Current comment</span>
                                <span>{request.commentByTeam == null ? '-' : request.commentByTeam}</span>
                            </div>
                            <div class="info-box-divider"></div>
                            <div class="info-box-row">
                                <span>Comment</span>
                                <textarea id="req-comment"/>
                            </div>
                            <button onClick={(e) => {
                                var commented = $('#req-comment').val();
                                console.log(commented);
                                $.ajax({
                                    url: 'http://localhost:8080/request/update?reqId='+ request.requestId + '&teamId=' + localStorage.getItem('login-id') + '&status=3&comment=' + commented,
                                    type: 'POST',
                                    success: (resp) => {
                                        request.status = 3;
                                        request.commentByTeam = commented;
                                        window.location.reload(false);
                                    }
                                });
                            }}>Comment and Close request</button>
                        </div>
                    </div>


                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </div>



        );
    }
}

export default RequestStatusUpdate;