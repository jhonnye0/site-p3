const User = require('../models/User');
const Contract = require('../models/Contract');

module.exports = {
    async store(req, res){

        const { user, value, description } = req.headers;
        const { id } = req.params;

        const hitman = await User.findById(id);

        if(!hitman){
            res.status(400).json({ error: 'User not found' });
        }

        const contract = await Contract.create({
            value,
            description,
            buyer: user,
            hitman: id
        });

        res.json(contract);
    }
};