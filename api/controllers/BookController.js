function init(mongoose) {
	var BookModel = require("../models/BookModel").getModel();

	function getAllBooks(request, response) {
		return BookModel.find(function( err, books ) {
	        if( !err ) {
	            return response.send( books );
	        } else {
	            return console.log( err );
	        }
	    });
	}

	function insertBook(request, response) {
		var book = new BookModel({
	        title: request.body.title,
	        author: request.body.author,
	        releaseDate: request.body.releaseDate,
	        keywords: request.body.keywords       // NEW
	    });
	    book.save( function( err ) {
	        if( !err ) {
	            return console.log( 'created' );
	        } else {
	            return console.log( err );
	        }
	        return response.send( book );
	    });
	}

	function getBook(request, response) {
		return BookModel.findById( request.params.id, function( err, book ) {
	        if( !err ) {
	            return response.send( book );
	        } else {
	            return console.log( err );
	        }
	    });
	}

	function updateBook(request, response) {
		return BookModel.findById( request.params.id, function( err, book ) {
	        book.title = request.body.title;
	        book.author = request.body.author;
	        book.releaseDate = request.body.releaseDate;
	        book.keywords = request.body.keywords; // NEW

	        return book.save( function( err ) {
	            if( !err ) {
	                console.log( 'book updated' );
	            } else {
	                console.log( err );
	            }
	            return response.send( book );
	        });
	    });
	}

	function deleteBook(request, response) {
		BookModel.findById( request.params.id, function( err, book ) {
	        return book.remove( function( err ) {
	            if( !err ) {
	                console.log( 'Book removed' );
	                return response.send( '' );
	            } else {
	                console.log( err );
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