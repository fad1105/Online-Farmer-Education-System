const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const GovermentScheme = require('../models/GovermentScheme');
const { body, validationResult } = require('express-validator');

//Route Get all Schemes using GET

router.get('/fetchschemes',async (req,res) => {
	 try{
		const schemes = await GovermentScheme.find({});
		res.json(schemes);
	} catch(error)
	{
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 2: Add a new Event using: POST "events/addnote". Login required
router.post('/addscheme', [
    body('title', 'Minlength of title is 5').isLength({ min: 5 }),
    body('pdfurl')], async (req, res) => {
        try {
        	//if(req.user.isadmin==true)
        	{
        		const { title, pdfurl } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const scheme = new GovermentScheme({title,pdfurl})

            const saveScheme = await scheme.save()

            res.json(saveScheme)
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