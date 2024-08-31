const User = require('../models/user');
const generateToken = require('../config/jwt');
const bcrypt = require('bcryptjs');

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isMatch = await await bcrypt.compare(password, user.password)


        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = generateToken(user);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};