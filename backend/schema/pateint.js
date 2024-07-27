const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for patient details
const patientSchema = new Schema({
    tokenId: {
        type: Number,
        required: true,
        unique: true
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
        required:true
    }
});

// Create the model for patient details
const patientModel = mongoose.model('Patient', patientSchema);

module.exports = patientModel;
