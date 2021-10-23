const mon = require('mongoose');

let eventSchema = new mon.Schema({
	_id:mon.Schema.Types.ObjectId,
	title:String,
	address:String,
	date:Date
}, {collection: 'event'});

module.exports = mon.model('event',eventSchema);