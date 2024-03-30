const express = require('express');
const router = express.Router();
const User = require('../module/userModule'); // Import the User model


router.post('/', async (req, res) => {
    // Access the parsed JSON data from req.body
    const data = req.body;
    try {
        // Create a new user instance
        const newUser = new User(data);
        // Save the new user to the database
        await newUser.save();
        console.log('data save successfully');
        // Respond with a success message
        res.status(200).json(newUser);
    } catch (error) {
        console.log('error save data', error);
        res.status(500).json({ error: 'internal server error' });
    }
});

module.exports = router;