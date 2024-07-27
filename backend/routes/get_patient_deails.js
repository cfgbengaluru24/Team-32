const patientModel = require('../schema/pateint');

const getPatientData = {
    path: '/patients/:tokenId',
    method: 'get',
    handler: async (req, res) => {
        const { tokenId } = req.params;

        try {
            // Find patient by tokenId
            const patient = await patientModel.findOne({ tokenId });

            if (!patient) {
                return res.status(404).json({ msg: 'Patient not found' });
            }

            // Respond with patient data
            res.status(200).json(patient);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.getPatientData =getPatientData 