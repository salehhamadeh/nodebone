var bcrypt = require('bcrypt');

var model;

function init(mongoose) {
	//Schemas
	var userSchema = mongoose.Schema({
		firstName: {type: String, required: true, unique: false},
		lastName: {type: String, required: true, unique: false},
		username: {type: String, required: true, unique: true},
	  	email: { type: String, required: true, unique: true },
	  	password: { type: String, required: true},
	});

	// Bcrypt middleware
	userSchema.pre('save', function(next) {
		var SALT_WORK_FACTOR = 10;
		var user = this;

		if(!user.isModified('password')) return next();

		bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
			if(err) return next(err);

			bcrypt.hash(user.password, salt, function(err, hash) {
				if(err) return next(err);
				user.password = hash;
				next();
			});
		});
	});

	// Password verification
	userSchema.methods.comparePassword = function(candidatePassword, cb) {
		bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
			if(err) return cb(err);
			cb(null, isMatch);
		});
	};

	//Models
	model = mongoose.model( 'User', userSchema );

	return model;
}

function getModel() {
	return model;
}

exports.init = init;
exports.getModel = getModel;