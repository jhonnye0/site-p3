const User = require('../models/User');

module.exports = {
    async LogInAuthenticationControl(req, res, Controller){

        const user = await User.findById(req.headers.user);

        if(user == null){
            res.redirect("/");
        }else{
            if(Controller != null)
                await Controller.store(req, res);
        }

        return res.json(user);
    },
    
    async LogInAuthentication(req, res){

        const myVar = setTimeout( () => { return false; }, 3000);
        const {username, password} = req.body;
        
        const user = await User.findOne({
            username: username,
            password: password
        }).then( myVar );

        
        return res.json(user);
    }
};