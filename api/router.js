function registerRoutes(app, mongoose) {
	var BookController = require("./controllers/BookController").init(mongoose);

	app.get( '/api', function( request, response ) {
	    response.send( 'Library API is running' );
	});
	//Get a list of all books
	app.get( '/api/books', function( request, response ) {
	    return BookController.getAllBooks(request, response);
	});
	//Insert a new book
	app.post( '/api/books', function( request, response ) {
	    BookController.insertBook(request, response);
	});
	//Get a single book by id
	app.get( '/api/books/:id', function( request, response ) {
	    return BookController.getBook(request, response);
	});
	//Update a book
	app.put( '/api/books/:id', function( request, response ) {
	    console.log( 'Updating book ' + request.body.title );
	    return BookController.updateBook(request, response);
	});
	//Delete a book
	app.delete( '/api/books/:id', function( request, response ) {
	    console.log( 'Deleting book with id: ' + request.params.id );
	    return BookController.deleteBook(request, response);
	});
}

exports.registerRoutes = registerRoutes;