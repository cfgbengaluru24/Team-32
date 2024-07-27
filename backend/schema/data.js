const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
    patientData: [{
        tokenId: {
            type: Number,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        bp: {
            type: Number,
            required: true
        },
        location:{
            type:String,
            required:true,
        },
        anemia: {
            haemoglobin: [{
                type: Number,
                required: true
            }],
            diagnosis: {
                type: String,
                required: true
            },
            treatment: {
                type: String,
                required: true
            }
        },
        oralHealIndex: {
            dIndex: [{
                type: Number,
                required: true
            }],
            cIndex: [{
                type: Number,
                required: true
            }],
            photoUrl: [{
                type: String,
                required: true
            }]
        }
    }]
});

const dataModel = mongoose.model('Data', dataSchema);

module.exports = dataModel;
