const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Event = require('../models/Event');
const { body, validationResult } = require('express-validator');

//Route Get all Events using GET

router.get('/fetchevents',async (req,res) => {
	 try{
		const events = await Event.find({});
		res.json(events);
	} catch(error)
	{
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 2: Add a new Event using: POST "events/addnote". Login required
router.post('/addevent', [
    body('eventnumber'),
    body('title', 'Minlength of title is 5').isLength({ min: 5 }),
    body('address', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('date')], async (req, res) => {
        try {
        	//if(req.user.isadmin==true)
        	{
        		const { eventnumber, title, address, date } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const event = new Event({
                eventnumber, title, address,date})

            const saveEvent = await event.save()

            res.json(saveEvent)
            //res.send(event._id);
        	}
        	// else
        	// {
        	// 	res.status(400).json({ error: "You are not admin" });
        	// }

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

module.exports = router