import React from "react";
import $ from 'jquery';
import {useParams} from 'react-router-dom';

class RequestStatusUpdate extends React.Component {
    render() {
       
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
                        <span class="body-heading">Request Description {this.props.reqId}</span>
                        

                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
                </div>
           


        );
    }
}

export default RequestStatusUpdate;