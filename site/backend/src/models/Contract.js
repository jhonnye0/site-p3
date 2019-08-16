const { Schema, model } = require('mongoose');

const ContractSchema = new Schema({
    value:{
        type: Number,
        required: true,
    },
    description: String,
    buyer:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    hitman: {
        type: Schema.Types.ObjectId,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('Contract', ContractSchema);