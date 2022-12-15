import React from "react";
import $ from 'jquery';

class NewRequest extends React.Component {
    render() {
        return (
            <div class="page-body no-background">
                <div class="sidebar">
                    <div class="sidebar-tab" onClick={(e) => {
                        e.preventDefault();
                        window.location = '/tenant';
                    }}>Dashboard</div>
                    <div class="sidebar-tab sidebar-current" onClick={(e) => {
                        e.preventDefault();
                        window.location = '/newrequest';
                    }}>Add New Request</div>
                    <div class="sidebar-tab" onClick={(e) => {
                        e.preventDefault();
                        window.location = '/tenant';
                    }}>Request History</div>
                </div>
                <div class="body-main tenant-body">
                    <span class="body-heading">Create new maintenance request</span>
                    <form id="request-form" onSubmit={(e) => {
                        e.preventDefault();
                        var inputs = document.getElementsByTagName("input");
                        for (var i = 0; i < inputs.length; i++) {
                            inputs[i].disabled = false;
                        }
                        var formdata = $('#request-form').serialize();
                        $.ajax({
                            url: 'http://localhost:8080/request/create?userId=' + localStorage.getItem('login-id') + '&' + formdata,
                            type: 'POST',
                            success: (resp) => {
                                $('.request-popup').addClass('unhide');
                            }
                        });
                    }}>
                        <div class="sub-form-container">
                            <span>Title</span>
                            <input type="text" name="title" />
                        </div>
                        <div class="sub-form-container">
                            <span>Location</span>
                            <select id="select-location" name="location">
                                <option value="0">Living Area</option>
                                <option value="1">Bathroom</option>
                                <option value="2">Kitchen</option>
                                <option value="3">Bedroom</option>
                                <option value="4">Laundry</option>
                                <option value="5">Other</option>
                            </select>
                        </div>
                        <div class="sub-form-container">
                            <span>Maintenance Description</span>
                            <textarea name="desc" id="maint-desc" cols="30" rows="10"></textarea>
                        </div>
                        <div class="sub-form-container">
                            <span>Attachments (JPG, JPEG, PNG):</span>
                            <input type="file" name="attachment" id="req-attachment" />
                        </div>
                        <input type="submit" value="Submit" />
                        
                    </form>
                    <div class="request-popup">
                            Successful
                            <button onClick={(e) => { $('.request-popup').removeClass('unhide') }}>OK</button>
                    </div>
                </div>
            </div>

        );
    }
}
export default NewRequest;