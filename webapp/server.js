// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ); //Utilities for dealing with file paths

//Create server
var app = express();

// Configure server
app.configure( function() {
    //parses request cookies and populates req.cookies
    app.use(express.cookieParser());

    //parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //Where to serve static content
    app.use( express.static( path.join( application_root, 'app') ) );

    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

//Start server
var port = 4711;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});