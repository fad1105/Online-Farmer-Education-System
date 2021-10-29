const connectToMongo = require('./db');
const express = require('express');
const mon = require("mongoose")
var cors = require('cors');

//connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mon.connect("mongodb+srv://fad1105:fad1105@cluster0.s7ct1.mongodb.net/OnlineFarmerEducationSystem?retryWrites=true&w=majority",
{
	useNewUrlParser:true,
	useUnifiedTopology:true
}).then(()=>{
	console.warn("DB is now connected");
})

//Routes
app.use('/events', require('./routes/events'))
app.use('/auth', require('./routes/auth'))
app.use('/education', require('./routes/education'))
// Event.find({}, function(err,events)
// {
// 	if(err) console.warn(err);
// 	//var parseBody = JSON.parse(users[]);
// 	//var name = parsedBody['name'];
// 	//app.get("/data",(req,res) => res.send(users));
// 	console.log(events);
// })
//app.get("/",(req,res) => res.send(users));

app.listen(port, () => {
  console.log(`Online-farmer-education backend listening at http://localhost:${port}`)
})
