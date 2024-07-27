const patientModel = require('../schema/pateint'); 

const postPatientData = {
    path: '/patients',
    method: 'post',
    handler: async (req, res) => {
        const { tokenId, firstName, lastName, phoneNumber, age, weight, height, sex, bp,location} = req.body;

        // Input validation
        if (!tokenId || !firstName || !lastName || !phoneNumber || !age || !weight || !height || !sex || !bp||!location) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        try {
            // Create new patient instance
            const newPatient = new patientModel({
                tokenId,
                firstName,
                lastName,
                phoneNumber,
                age,
                weight,
                height,
                sex,
                bp,
                location
            });

            // Save patient to database
            await newPatient.save();

            // Respond with success message
            res.status(201).json({ msg: 'Patient data added successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postPatientData=postPatientData