const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://Jenil:Jenil@cluster0.ec81c.mongodb.net/Practice?retryWrites=true&w=majority";

const mongoURI = "mongodb+srv://fad1105:Fenil11/05/2001@cluster0.s7ct1.mongodb.net/OnlineFarmerEducationSystem?retryWrites=true&w=majority" ;


const connectToMongo = () => {
	mongoose.connect(mongoURI,()=>{
		console.log("Connected to Mongo Successfully");
	})
}

module.exports = connectToMongo;

// mongodb+srv://fad1105:fad1105@cluster0.s7ct1.mongodb.net/OnlineFarmerEducationSystem?retryWrites=true&w=majority