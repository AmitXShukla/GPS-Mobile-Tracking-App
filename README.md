<h2>HTML Bootstrap Angular 9.0 MYSQL NodeJS CRUD Operation</h2>
<h2>GPS Mobile Location Tracking App</h2>
<i>send an email to info@elishconsulting.com for Pro version download.</i>
<i>This repository is updated to Angular 9.0</i>
<h2><a href="https://www.youtube.com/playlist?list=PLp0TENYyY8lHJGZX6-Ek4MkvAnzWmC9oa">Video Tutorials Link!</a></h2>
In this app, I am going to demostrate how to use most common, popular  and widely used technologies.<br/>
I believe, HTML, CSS, Javascript and Bootstrap are still used in 90% of iOS and Android we see today in market.<br/>
And MYSQL is no doubt king of all databases.<br/>
I am also going to make use of advance Angular 7 framework at front end which will connect to MYSQL database at the backend through NOdeJS Javascript engine.<br/><br/>
My Objective is to show how to make a complete CRUD operations in MYSQL & Angular 9. <br/>
However, instead of making a simple manual or tutorial, I am going to demostrate this in a real-life app.<br/>
One other reason, I want to show CRUD in an app is, because writing CRUD in production is very different than what do you see in tutorials or manuals.<br/>
In real-life App, each of the CRUD operations should be authenticated and authroized before it's allowed to access database and perform any operations.<br/>
Each and every database call, whether is read or write, should be properly authenticated and authorized based on invididual user privileges and busines operations.<br/>
For example, User can only update their own settings and admin can update someone else password.<br/>
<h2>Tools: </h2>
<b>front-end:</b> Angular 9.0, HTML CSS JS & Bootstrap<br/>
<b>back-end:</b> MYSQL<br/>
<b>middleware:</b> JWT, CORS, NodeJS, Express etc.<br/>
<h2>Let's get started :-</h2>
<h2>Front end :-</h2>
At first, We are going to work on a static website using HTML, CSS and Bootstrap.<br/>
We are going to use part of this website in our Angular App.
<br/>
If you are using VisualCode editor, please install a live-server extension.<br/>
Otherwise, you can use any webserver to host your website.<br/>
Now, let's create index.html, login.html, signup.html, aboutus.html, dashboard.html, reports.html and settings.html and host this to your webserver.<br/>
At this point, we only want to make sure that individual html pages work fine only, these pages don't need to be connected or have any business logic because we are going to write all business, routing and other logic in Angular 7.
<br/><br/>
Before we start, Please make sure you have latest version of node js installed.<br/>
Let's head out to https://nodejs.org/en/ and grab latest nodejs.<br/>
Once you have nodejs installed, open command prompt/terminal window.<br/>
$ node -v // make sure, this command comes back with a node version<br/>
$ npm -v // make sure, this command comes back with a npm version<br/><br/>

$ npm install -g @angular/cli<br/>
$ mkdir app<br/>
$ cd app<br/>
$ mkdir client<br/>
$ mkdir server<br/>
$ cd client<br/>
$ ng new GPS-Mobile-Tracker<br/>
$ cd GPS-Mobile-Tracker<br/>
$ ng serve<br/>

<h2>Back end :-</h2>
$ cd server<br/>
$ npm init<br/>
$ npm install --save nodemon cors express dotenv jsonwebtoken mysql bcrypt body-parser<br/>
$ nodemon app

MYSQL Tables
--
-- Table structure for table `user`
-- 
CREATE TABLE `user` (
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(300) NOT NULL,
  `question` varchar(100) DEFAULT NULL,
  `answer` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Table structure for table `usergps`
--

CREATE TABLE `usergps` (
  `email` varchar(100) NOT NULL,
  `lat` varchar(10) NOT NULL,
  `long` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`email`,`createdAt`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
