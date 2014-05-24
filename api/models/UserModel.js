function init(mongoose) {
	//Schemas
	var userSchema = mongoose.Schema({
	  username: { type: String, required: true, unique: true },
	  email: { type: String, required: true, unique: true },
	  password: { type: String, required: true},
	});

	//TODO: Add BCrypt to schema's pre save. See https://github.com/jaredhanson/passport-local/blob/master/examples/express3-mongoose/app.js

	//Models
	var UserModel = mongoose.model( 'User', userSchema );

	return UserModel;
}

exports.init = init;