function registerRoutes(app, mongoose, passport) {
	var BookController = require("./controllers/BookController").init(mongoose);

	app.get( '/api', function( request, response ) {
	    response.send( 'Library API is running' );
	});
	//Get a list of all books
	app.get( '/api/books', ensureAuthenticated, function( request, response ) {
	    return BookController.getAllBooks(request, response);
	});
	//Insert a new book
	app.post( '/api/books', ensureAuthenticated, function( request, response ) {
	    BookController.insertBook(request, response);
	});
	//Get a single book by id
	app.get( '/api/books/:id', ensureAuthenticated, function( request, response ) {
	    return BookController.getBook(request, response);
	});
	//Update a book
	app.put( '/api/books/:id', ensureAuthenticated, function( request, response ) {
	    console.log( 'Updating book ' + request.body.title );
	    return BookController.updateBook(request, response);
	});
	//Delete a book
	app.delete( '/api/books/:id', ensureAuthenticated, function( request, response ) {
	    console.log( 'Deleting book with id: ' + request.params.id );
	    return BookController.deleteBook(request, response);
	});

	// POST /login
	//   This is an alternative implementation that uses a custom callback to
	//   acheive the same functionality.
	app.post('/api/login', function(req, res, next) {
	  passport.authenticate('local', function(err, user, info) {
	    if (err) { return next(err) }
	    if (!user) {
	      req.session.messages =  [info.message];
	      return res.redirect('/login.html')
	    }
	    req.logIn(user, function(err) {
	      if (err) { return next(err); }
	      return res.redirect('/success.html');
	    });
	  })(req, res, next);
	});

	app.get('/api/logout', function(req, res){
	  req.logout();
	  res.redirect('/login.html');
	});
}

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login.html')
}

exports.registerRoutes = registerRoutes;