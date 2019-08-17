const User = require('../models/User');

module.exports = {
    async LogInAuthentication(req, res){
        const { username, password } = req.body;

        const element = await User.findOne({
            username: username,
            password: password
        });
        if(element === null) return false;
        else return res.json(element);
    }
};