function init(mongoose) {
	var BookModel = require("../models/BookModel").getModel();

	function getAllBooks(request, response, next) {
		return BookModel.find(function( err, books ) {
	        if( !err ) {
	            response.send( books );
	        } else {
	            console.log( err );
	            next(err);
	        }
	    });
	}

	function insertBook(request, response, next) {
		var book = new BookModel({
	        title: request.body.title,
	        author: request.body.author,
	        releaseDate: request.body.releaseDate,
	        keywords: request.body.keywords       // NEW
	    });
	    book.save( function( err ) {
	        if( !err ) {
	            response.send( book );
	        } else {
	            console.log( err );
	            next(err);
	        }
	    });
	}

	function getBook(request, response, next) {
		return BookModel.findById( request.params.id, function( err, book ) {
	        if( !err ) {
	            response.send( book );
	        } else {
	            console.log( err );
	            next(err);
	        }
	    });
	}

	function updateBook(request, response, next) {
		return BookModel.findById( request.params.id, function( err, book ) {
	        book.title = request.body.title;
	        book.author = request.body.author;
	        book.releaseDate = request.body.releaseDate;
	        book.keywords = request.body.keywords; // NEW

	        return book.save( function( err ) {
	            if( !err ) {
	                response.send( book );
	            } else {
	                console.log( err );
	                next(err);
	            }
	        });
	    });
	}

	function deleteBook(request, response, next) {
		BookModel.findById( request.params.id, function( err, book ) {
	        return book.remove( function( err ) {
	            if( !err ) {
	                response.send( 'Book removed' );
	            } else {
	                console.log( err );
	                next(err);
	            }
	        });
	    });
	}

	return {
		"getAllBooks": getAllBooks,
		"insertBook": insertBook,
		"getBook": getBook,
		"updateBook": updateBook,
		"deleteBook": deleteBook
	};
}

exports.init = init;