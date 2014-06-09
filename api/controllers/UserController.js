function init(mongoose) {
	var UserModel = require("../models/UserModel").getModel();

	function getAllUsers(request, response) {
		return UserModel.find(function( err, users ) {
	        if( !err ) {
	            return response.send( users );
	        } else {
	            return console.log( err );
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
	            return console.log( 'created' );
	        } else {
	            return console.log( err );
	        }
	        return response.send( user );
	    });
	}

	function getUser(request, response) {
		return UserModel.findById( request.params.id, function( err, user ) {
	        if( !err ) {
	            return response.send( user );
	        } else {
	            return console.log( err );
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
	                console.log( 'user updated' );
	            } else {
	                console.log( err );
	            }
	            return response.send( user );
	        });
	    });
	}

	function deleteUser(request, response) {
		UserModel.findById( request.params.id, function( err, user ) {
	        return user.remove( function( err ) {
	            if( !err ) {
	                console.log( 'User removed' );
	                return response.send( '' );
	            } else {
	                console.log( err );
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