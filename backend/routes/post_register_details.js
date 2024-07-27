const bcrypt = require('bcrypt');
const Login = require('../schema/login');

const postRegisterDetails = {
    path: '/register',
    method: 'post',
    handler: async (req, res) => {
        const { username, password } = req.body;

        // Input validation
        if (!username || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        try {
            // Check if user already exists
            let user = await Login.findOne({ username });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Create new user instance
            user = new Login({
                username,
                password
            });

            // Save user to database
            await user.save();

            // Respond with success message
            res.status(201).json({ msg: 'User registered successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postRegisterDetails = postRegisterDetails;
