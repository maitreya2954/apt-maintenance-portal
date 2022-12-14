import React from "react";

class NewRequest extends React.Component
{
    render()
   {
     return(
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
        <form id="request-form">
                <div class="sub-form-container">
                    <span>Title</span>
                    <input type="text"/>
                </div>
                <div class="sub-form-container">
                    <span>Location</span>
                    <select id="select-location">
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
                    <input type="file" name="attachment" id="req-attachment"/>
                </div>
                <input type="submit" value="Submit"/>
        </form>
        
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </div>

);
}
}
export default NewRequest;