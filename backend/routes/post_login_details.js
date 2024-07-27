const bcrypt = require('bcrypt');
const Login = require('../schema/login.js');

const postLoginRoute = {
    path: '/login',
    method: 'post',
    handler: async (req, res) => {
        const { username, password } = req.body;

        // Input validation
        if (!username || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        try {
            // Find user by username
            let user = await Login.findOne({ username });
            if (!user) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Check password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Respond with success message
            res.status(200).json({ msg: 'Login successful' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postLoginRoute = postLoginRoute;
