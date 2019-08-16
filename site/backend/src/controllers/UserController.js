const axios = require('axios');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { username, bio, password, type, value } = req.body;

        const userExists = await User.findOne({ username })

        if(userExists){
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { avatar_url: avatar } = response.data;

        const user = await User.create({
            username,
            password,
            type,
            bio,
            value,
            avatar
        })

        return res.json(user);
    }
};