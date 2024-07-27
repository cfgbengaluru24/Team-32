const mongoose = require('mongoose');

const anemiaSchema = new mongoose.Schema({
    tokenId: {
        type: Number,
        required: true
    },
    haemoglobin: {
        type: [Number], 
        required: true
    },
    diagnosis: {
        type: String,
    },
    treatment: {
        type: String,
    }
});

module.exports = mongoose.model('anemia', anemiaSchema);
