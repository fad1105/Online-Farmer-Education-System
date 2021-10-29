const mon = require('mongoose');

let SchemeSchema = new mon.Schema({
	//_id:mon.Schema.Types.ObjectId(),
	title:String,
	pdfurl:String,
});

module.exports = mon.model('govermentscheme',SchemeSchema);