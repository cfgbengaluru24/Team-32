const mongoose = require('mongoose');

const oralSchema = new mongoose.Schema({
    tokenId: {
        type: Number,
        required: true
    },
    dIndex: {
        type: [Number], 
        required: true
    },
    cIndex: {
        type: [Number],
        required: true
    },
    photoUrl: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('oral', oralSchema);
