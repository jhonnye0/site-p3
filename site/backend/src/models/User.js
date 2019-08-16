const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    likes: [{
       type: Schema.Types.ObjectId,
       ref: 'User', 
    }],
    value: Number,
}, {
    timestamps: true,
});

module.exports = model('User', UserSchema);

