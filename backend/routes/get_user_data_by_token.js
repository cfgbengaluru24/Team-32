const patientModel = require('../schema/pateint');

const getUserDataByToken = {
    path: '/patients/:tokenId',
    method: 'get',
    handler: async (req, res) => {
        const { tokenId } = req.params;

        try {

            const patient = await patientModel.findOne({ tokenId });

            if (!patient) {
                return res.status(404).json({ msg: 'Patient not found' });
            }

            res.status(200).json(patient);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.getUserDataByToken = getUserDataByToken;
