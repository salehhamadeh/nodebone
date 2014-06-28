function init(mongoose) {
	var UserModel = require("../models/UserModel").getModel();

	function getAllUsers(request, response) {
		return UserModel.find(function( err, users ) {
	        if( !err ) {
	            response.send( users );
	        } else {
	            console.log( err );
	            next(err);
	        }
	    });
	}

	function insertUser(request, response) {
		var user = new UserModel({
	        firstName: request.body.firstName,
	        lastName: request.body.lastName,
	        email: request.body.email,
	        password: request.body.password
	    });
	    user.save( function( err ) {
	        if( !err ) {
	            response.send( user );
	        } else {
	            console.log( err );
	            next(err);
	        }
	    });
	}

	function getUser(request, response) {
		return UserModel.findById( request.params.id, function( err, user ) {
	        if( !err ) {
	            response.send( user );
	        } else {
	            console.log( err );
	            next(err);
	        }
	    });
	}

	function updateUser(request, response) {
		return UserModel.findById( request.params.id, function( err, user ) {
	        user.firstName = request.body.firstName;
	        user.lastName = request.body.lastName;
	        user.email = request.body.email;
	        user.password = request.body.password;

	        return user.save( function( err ) {
	            if( !err ) {
	                response.send( user );
	            } else {
	                console.log( err );
	                next(err);
	            }
	        });
	    });
	}

	function deleteUser(request, response) {
		UserModel.findById( request.params.id, function( err, user ) {
	        return user.remove( function( err ) {
	            if( !err ) {
	                response.send( 'User removed' );
	            } else {
	                console.log( err );
	                next(err);
	            }
	        });
	    });
	}

	return {
		"getAllUsers": getAllUsers,
		"insertUser": insertUser,
		"getUser": getUser,
		"updateUser": updateUser,
		"deleteUser": deleteUser
	};
}

exports.init = init;