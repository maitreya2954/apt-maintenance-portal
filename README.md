# Skyway Apartment Management Portal

## Introduction

Skyway Management is an apartment maintenance portal built as a course project submission for the CMPSC487W : Software Engineering and Design taken as a part of fullfilment of the Master program in Computer Science.

## Stack

* Java with SpringBoot

* HTML and CSS

* React JS

* MySQL

* Adobe XD (For GUI Design)

## Group

* Siddharth Rayabharam (nqr5356@psu.edu)

* Abhivav Vij (abv5371@psu.edu)

## Use Cases

### Create New Maintenance Request :

#### Base Case: 

The tenant can click the "Create New Request" button to register a request for the maintenance team. The request includes the location and a brief description of the problem. The tenant can also include more than 1 problem in the same request.

#### Alternative Case:

**Database Connection Error:** If the system can not connect to the database server in time, it will display a “Connection Error” message to the tenant. No request is submitted in this scenario. A message will also be sent to the manager to notify them of the database going down.

**DDescription too long:** A tenant can describe a problem in not more than 100 words. The cursor stops typing once the 100 words mark gets hit and a message is displayed "word limit exceeded".

**Description not mentioned:** The request is not submitted without a problem description. If a tenant tries to submit a request without a description an error message displays stating "please describe the problem".

### Mark Job as Closed :

#### Base Case: 

When a team member clicks on an active request, the system will take the user to a new page, showing the request and details for the request such as the status of the request, the apartment unit, the request is for, the description of the request, and if anyone is currently working on the request. There is also an option where they can mark a request as closed. Each task is marked as pending by default unless a team member or manager marks it as Completed. Once the request has been marked closed, the user hits the “Submit changes” button and then will be taken back to the “View All Active Request Pages”.

#### Alternative Case:

**The Status Field is not filled in:** If the user did not mark a request as completed or uncompleted, then the system will keep the request in the pending list.

**The “Submit Changes” Button takes too long to update:** Once the user hits the “Submit Changes” button and attempts to update the database, if it takes too long then the request will not be updated and the page will refresh, with all the information that the team member entered still in their respective text boxes. The Manager will be contacted by the system when a search takes too long.

**Database Connection Error:** If the system can not connect to the database server in time, it will display a “Connection Error” message to the user and keep them on that maintenance request page. A message will also be sent to the manager to notify them of the database going down.

## Database

![ER Diagram](https://github.com/maitreya2954/apt-maintenance-portal/blob/main/ERDiagram.png)


