const bcrypt = require('bcrypt');
const Login = require('../schema/login.js');
function getRandomBinary() {
    return Math.round(Math.random());
  }
const postLoginRoute = {
    path: '/login',
    method: 'post',
    handler: async (req, res) => {
        console.log(req.body);
        const { username, password } = req.body;
        console.log(username);
        console.log("ran")
        // Input validation
        if (!username || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        try {
            // Find user by username
            let user = await Login.findOne({ username:username });
            const isAdmin=user.isAdmin
            if(!isAdmin){
                return res.status(400).json({ msg: 'Not an admin' });
            }
            if (!user) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Check password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Respond with success message
            res.status(200).json({ msg: 'Login successful',isAdmin:getRandomBinary() });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postLoginRoute = postLoginRoute;
