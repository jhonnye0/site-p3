const axios = require('axios');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const user = req.params.id;

        const users = await User.find({
            $and: [
                { _id: { $ne: user} },
                { type: { $ne: "User"} },
                { username: { $ne: "admin"} }
            ],
        });

        res.json(users);
        return users;
    },

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

        res.json(user);
    },

    async update(req, res){

        const user = req.params.userId;
        const { password, bio, value, type, avatar } = req.body;
        const userExists = await User.findById(user);

        userExists.password = password;
        userExists.bio = bio;
        userExists.value = value;
        userExists.type = type;
        userExists.avatar = avatar;

        await userExists.save();

        return res.json(userExists);
    }
};