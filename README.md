nodebone
========

Template for web applications that use Node.JS and Express for the backend and Backbone.js for the front-end.
The API uses passport.js for authentication.

Requirements
============

* Node.JS
* NPM
* Bower
* MongoDB

Setting up the Environment
==========================
The first things you need to do to get set up is to install all the dependencies. The backend (Node.JS) dependencies are
defined in package.json and the client-side dependencies are defined in bower.json.

Installing dependencies using NPM and Bower
-------------------------------------------

1- Use the terminal to go into the api folder.
2- Then run "npm install".
3- Use the terminal to go into the webapp folder.
4- Then run "npm install".
5- Run "bower install".

Set up the MongoDB Database
---------------------------
If you already have a database set up, change the database_url in api/config.json to point to your database. The template
uses two collections in the database, users and books.

If you do not already have a database for the web application to use, open the MongoDB terminal and create a database.
The default name that nodebone uses is "library_database", but you can use whichever name you like and change
api/config.json.

Running the template
--------------------
Assuming that MongoDB is running and is set up properly, open two terminal or command-line windows. To run the backend, go to
api and run "node server.js". In the other terminal window, go to webapp and run "node server.js" to run the Express static
server that serves the Backbone.js app. By default, the api uses port 4722 and the client-side uses port 4711. Open up a
browser and go to http://localhost:4711. If the client-side is good, you should see a page that asks for login information.
To test the api, issue an HTTP POST to http://localhost:4722/api/user with the data set to a Javascript object containing the
field firstName, lastName, email, and password. Now navigate to http://localhost:4722/api/user. If everything is set up
properly, you should see a JSON response that has the user's information. Note that the password is hashed.

License
=======
MIT


