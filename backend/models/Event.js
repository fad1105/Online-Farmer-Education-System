const mon = require('mongoose');

let eventSchema = new mon.Schema({
	//_id:mon.Schema.Types.ObjectId(),
	eventnumber:Number,
	title:String,
	address:String,
	date:Date
}, {collection: 'event'});

module.exports = mon.model('event',eventSchema);