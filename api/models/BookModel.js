var model;

function init(mongoose) {
	//Schemas
	var Keywords = new mongoose.Schema({
	    keyword: String
	});
	var Book = new mongoose.Schema({
	    title: String,
	    author: String,
	    releaseDate: Date,
	    keywords: [Keywords]
	});

	//Models
	model = mongoose.model( 'Book', Book );

	return model;
}

function getModel() {
	return model;
}

exports.init = init;
exports.getModel = getModel;