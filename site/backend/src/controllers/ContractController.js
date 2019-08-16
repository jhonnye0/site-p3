const User = require('../models/User');
const Contract = require('../models/Contract');

module.exports = {
    async store(req, res){

        const { user, value, description } = req.headers;
        const { userId } = req.params;

        const hitman = await User.findById(userId);

        if(!hitman){
            return res.status(400).json({ error: 'User not found' });
        }

        const contract = await Contract.create({
            value,
            description,
            buyer: user,
            hitman: userId
        });

        return res.json(contract);
    }
};