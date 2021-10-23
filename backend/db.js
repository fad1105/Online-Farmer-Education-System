const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Jenil:Jenil@cluster0.ec81c.mongodb.net/Practice?retryWrites=true&w=majority";

const connectToMongo = () => {
	mongoose.connect(mongoURI,()=>{
		console.log("Connected to Mongo Successfully");
	})
}

module.exports = connectToMongo;