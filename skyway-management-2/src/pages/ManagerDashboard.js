import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from 'jquery';

class ManagerDashboard extends React.Component {


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
        const styleObj1 = {
            fontSize: 40,
            fontWeight: 700,

        }

        var requests = [],
            filteredrequests = [];
        $.ajax({
            url: 'http://localhost:8080/request/all',
            type: 'GET',
            async: false,
            success: (resp) => {
                requests = resp;
                for (const req of resp) {
                    if (req.status === 2) {
                        filteredrequests.push(req);
                    }
                }
            }
        });

        return (

            <div class="page-body no-background">
                <div class="sidebar">
                    <div class="sidebar-tab sidebar-current">Dashboard</div>
                </div>
                <div class="body-main tenant-body">
                    <span class="body-heading no-padding">Welcome, Manager</span>
                    <div className="filters">
                        <form onChange={(e) => {
                            console.log('Changed formed');
                            filteredrequests = [];
                            var startstring = document.getElementById('startdate').value,
                                endstring = document.getElementById('enddate').value;
                            var startpresent = startstring || startstring.length !== 0,
                                endpresent = endstring || endstring.length !== 0;
                            var startDate = !startstring || startstring.length === 0 ? new Date().getTime() : new Date($('#startdate').value).getTime(),
                                endDate = !endstring || endstring.length === 0 ? new Date().getTime() : new Date($('#enddate').value).getTime(),
                                endDate = endDate + 864000000,
                                checkboxChecked = document.getElementById('reqcheckbox').checked;
                            for (const req of requests) {
                                var includeReq = true;
                                if ((req.status === 3 && !checkboxChecked) ||
                                    ((startpresent && endpresent) && (req.startMillis < new Date(startstring).getTime() || req.startMillis > new Date(endstring).getTime() +  864000000))) {
                                    includeReq = false;
                                }
                                if (includeReq) {
                                    filteredrequests.push(req);
                                }
                            }
                            console.log(filteredrequests);
                        }}>
                            <span>Start Date</span>
                            <input type="date" id="startdate" name="startdate" />
                            <span>End Date</span>
                            <input type="date" id="enddate" name="enddate" />
                            <input type="checkbox" id="reqcheckbox" name="reqcheckbox" />
                            <span>Show closed requests</span>
                        </form>
                    </div>

                    <div class="request-table height-70percent">
                        <div class="request-table-row table-header">
                            <div class="request-table-cell col1 white-bck-color">Name</div>
                            <div class="request-table-cell col2 white-bck-color">Apt#</div>
                            <div class="request-table-cell col3 white-bck-color">Type</div>
                        </div>
                        <div class="request-table-overflow">
                            {filteredrequests.map(req => {
                                return (<div class="request-table-row">
                                    <div class="request-table-cell col1">{req.title}</div>
                                    <div class="request-table-cell col2">{formatDate(req.startMillis)}</div>
                                    <div class="request-table-cell col3">{req.status == 2 ? 'Pending' : 'Closed'}</div>
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
export default ManagerDashboard;