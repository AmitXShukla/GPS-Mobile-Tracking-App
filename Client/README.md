Download Employee Payroll/Salary App in Angular 6.1 MEAN Stack, GraphQL with code

In this video, I will show you one complete MEAN Stack App using all latest versions like MongoDB4, Angular 6, GraphQL, You will be able to download entire source code, deploy it on your local machine or cloud and I will leave it up to you if you want to enhance this and make more changes.<br/>
THis tutorial is not for beginners and is not for teaching purpose, but you don't need to be an expert either to understand these technologies.<br/>
I recommend to please take this video as a design pattern discussion where I am showing how we can use different technologies to solve real work problems and deliver a great quality app.

<h2><u>Employee Payroll/Salary Management App</u></h2>
<b>Objective: </b> This document serves as an Installation Guide for Elish HCM Cloud free commmunity version Desktop/Mobile App.<br><br>
<b>Tools: </b> MEAN Stack (latest) Angular 6.1, NodeJS 10.8, Express, GraphQL and MongoDB 4.0 or MYSQL<br/>
Using this design pattern, any old client/server software (like VB/SQL or JAVA/Oracle) can be converted to new design to replace or run in parallel with original software.<br/>
You can easliy deploy this as an exe desktop app, host it over premises or over cloud or create an Android & iOS mobile app easily.
This design pattern is built for Big Data technologies and supports millions of transactions.<br/>
Also, this design pattern can be applied to any front end like React, VueJS, HTML/JS/Bootstrap/Project clarityto get any front-end look and feel.<br/>
And Same concepts can applied to connect to almost any database of owners choice at the backend like MYSQL, MS SQL Server, Oracle or CouchDB, MongoDB, Google Firebase etc.


<h2><u>What's included :</u></h2>
In this repository, Only Employee Management, Payroll/Salary, Voucher and Expense modules is included.
<h2><u>Elish HCM Cloud v1.1.8</u></h2>
Elish HCM Cloud provide a completely free desktop and mobile app for managing Employee, Payables, Payroll, Attendance (GPS & Picture), Visitor (GPS & Picture) and other management modules.<br><br>
<u><i>future update/version/releases after v1.1.8 baseline release, will include new features and bug fixes for free under community license. For enhancement/feature requests, please open a new issue at this Github Repository.</i></u><br><br>
<h2><u>App Choices:</u></h2>
#A. Elish HCM Cloud also provide a free web and mobile Enterprise app, hosted on Google Cloud with Google Firebase/Firestore database at:<br><br>
https://alivetracking.com<br>
Google Playstore - https://alivetracking.com<br><br>
#B. For Community/Developer edition, developers can download a copy of "out of the box installable software package" or complete source code for free.<br><br>

Below documentation serves as installation instruciton for point #B mentioned above.<br>
1. Installation Instruction for "out of the box Installable Desktop/Mobile App"<br>
2. Community/Developers Open Source Code guide<br>
<h2><u>Installation Instruction for "out of the box Installable Desktop/Mobile App"</u><h2>
------------------------------------------------------------------------------------
By dafault, Elish HCM Cloud Community Edition is bundled with MongoDB.<br>
However, Other database supported on v1.1.8 release are<br>
MYSQL, MS SQL Server, PostGreSQL, CouchDB, Google Firebase/FireStore, MongoDB<br><br>
<u><i>If you wish to migrate/upgrade your old desktop or client/server software to enterprise desktop/mobile app, please write to info@elishconsulting.com for Enterprise version upgrade.</i></u><br><br>

<b>Step #1:</b> Install MongoDB or any database of preference<br>
Please follow along installation instruction and proceed to next step when database installation is complete and verified.<br><br>
<b>Step #2:</b> Install NodeJS, Express and GraphQL Middleware<br>
Please follow along installation instruction and proceed to next step when installation is complete and verified.<br><br>
<b>Step #3:</b> Download Executable App<br>
Please follow along installation instruction and proceed to next step when installation is complete and verified.<br><br>
<b>Step #4:</b> In case if you wish to register your app as Google PlayStore/ Apple iOS app<br>
Please follow along installation instruction to configure your app/database and register your app to Apple AppStore and Google PlayStore.<br><br>

------------------------------------------------------------------------------------
<h2><u>Developers Source Code guide</u><h2>
------------------------------------------------------------------------------------
<b>Step #1:</b> Install MongoDB or any database mentioned above in list<br>
Please follow along installation instruction and proceed to next step when database installation is complete and verified.<br><br>
<b>Step #2:</b> Install NodeJS, Express and GraphQL Middleware<br>
Please follow along installation instruction and proceed to next step when installation is complete and verified.<br><br>
<b>Step #3:</b> Download Executable App<br>
Please follow along installation instruction and proceed to next step when installation is complete and verified.<br><br>
<b>Step #4:</b> In case if you wish to register your app as Google PlayStore/ Apple iOS app<br>
Please follow along installation instruction to configure your app/database and register your app to Apple AppStore and Google PlayStore.<br><br>

--------------------------------------------------------------------------------------
Download a copy of couchdb database.<br>
<a href="http://couchdb.apache.org/">Download CouchDB</a><br>
<h4>Install Couchdb</h4>

When you install couchdb database for Windows, Linux or Mac.<br>
make sure, you "check" the box, where it says, Install as a service.<br>
<h4>Configure Couchdb</h4>
After installation<br>
open your web browser and go to <br>
<a href="http://127.0.0.1:5984/_utils">http://127.0.0.1:5984/_utils</a><br>

Sign in and create an admin user<br>
admin , password<br>

Go to CORS tab <br>
for local install, click on allow "all domains" (For single node local installation only)<br><br>
Go to Verify Installaion, and click on verify, make sure, it comes back with all checked green clicks. <br>

<h4>IMPORTANT</h4>
Shut down your computer and restart<br>
After computer is restarted, <br>
open your web browser and go to <br>
<a href="http://127.0.0.1:5984/_utils">http://127.0.0.1:5984/_utils</a><br>
**We want to make sure, couch db starts as a service, that means, no separate double click/software start is required.<br>
couchdb starts automatically when computer starts.<br>

<h4>Configure databases</h4>
<h4>1. create database   p_users</h4>
2. create new view (design document -> click New view)<br>
3. for first view - design  docname = app  and viewname = viewByCode<br>
4. for second view - select exisiting document = design/app  and viewname = viewByVal<br>
5. click on viewByCode and Edit<br>
copy and paste following<br>
save this view code.<br>
6. click on viewByVal and Edit<br>
copy and paste following<br>
save this view code.<br>