import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from 'jquery';
import moment from 'moment';

class ManagerDashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            requests: [],
            filteredrequests: []
        };
        $.ajax({
            url: 'http://localhost:8080/request/all',
            type: 'GET',
            async: false,
            success: (resp) => {
                this.state.requests = resp;
                for (const req of resp) {
                    if (req.status === 2) {
                        this.state.filteredrequests.push(req);
                    }
                }
            }
        });

    }

    handleStartDate = (date) => {
        this.setState({ startDate: date });
        this.commonHandle()
    };

    handleEndDate = (date) => {
        this.setState({ endDate: date })
        this.commonHandle()
    };


    handleChange = (e) => {
        this.setState({ agreement: e.target.checked });
        this.commonHandle()
    }

    commonHandle = () => {
        var localreqs = []
        var startstring = document.getElementById('startdate').value,
            startpresent = startstring || startstring.length !== 0,
            endstring = document.getElementById('enddate') ? document.getElementById('enddate').value : "",
            endpresent = endstring || endstring.length !== 0;
        if (startpresent) {
            this.setState({ startDate: startstring });
        }
        for (const req of this.state.requests) {
            var includeReq = true;
            if (req.status === 3 && !document.getElementById('reqcheckbox').checked) {
                includeReq = false;
            } else if ((startpresent && endpresent) && (req.startMillis < new Date(startstring).getTime() || req.startMillis > new Date(endstring).getTime() + 86400000)) {
                includeReq = false;
            } else if (startpresent && !endpresent && req.startMillis < new Date(startstring).getTime()) {
                includeReq = false;
            }
            if (includeReq) {
                localreqs.push(req);
            }
        }
        this.setState({ filteredrequests: localreqs })
    }


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
                    <div className="filters" onChange={this.commonHandle}>
                        <div>
                            <span>Start Date</span>
                            <input type="date" id="startdate" name="startdate" />
                        </div>


                        {document.getElementById('startdate') && document.getElementById('startdate').value.length !== 0 &&
                            <div>
                                <span>End Date</span>
                                <input type="date" id="enddate" name="enddate" />
                            </div>
                        }
                        <div>
                            <input type="checkbox" id="reqcheckbox" name="reqcheckbox" />
                            <span>Show closed requests</span>
                        </div>

                        {/* <span >Start Date</span>


                        <div className="form-group1"><DatePicker
                            id="startdate"
                            selected={this.state.startDate}
                            onChange={this.handleStartDate}
                            name="startDate"
                        />
                        </div>
                        <span >End Date</span>

                        <div className="form-group2"><DatePicker
                            id="enddate"
                            selected={this.state.endDate}
                            onChange={this.handleEndDate}
                            name="endDate"
                        />
                        </div>




                        <div>
                            <label>
                                <input type="checkbox"
                                    checked={this.state.agreement}
                                    onChange={this.handleChange} />
                                <span>Closed requests</span>
                            </label>
                        </div> */}


                    </div>

                    <div class="request-table height-70percent">
                        <div class="request-table-row table-header">
                            <div class="request-table-cell col1 white-bck-color">Name</div>
                            <div class="request-table-cell col2 white-bck-color">Date</div>
                            <div class="request-table-cell col3 white-bck-color">Status</div>
                        </div>
                        <div class="request-table-overflow">
                            {this.state.filteredrequests.map(req => {
                                return (<div class="request-table-row">
                                    <div class="request-table-cell col1">{req.title}</div>
                                    <div class="request-table-cell col2">{formatDate(req.startMillis)}</div>
                                    <div className={req.status == 2 ? "request-table-cell col3 bck-red" : "request-table-cell col3 bck-green"}>{req.status == 2 ? 'Pending' : 'Closed'}</div>
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