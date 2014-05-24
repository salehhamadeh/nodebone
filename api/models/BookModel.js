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
	var BookModel = mongoose.model( 'Book', Book );

	return BookModel;
}

exports.init = init;