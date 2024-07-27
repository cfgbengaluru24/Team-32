const dataModel = require('../schema/data');

const getCombinedDataByTokenId = {
    path: '/data/:tokenId',
    method: 'get',
    handler: async (req, res) => {
        const { tokenId } = req.params;

        try {
            const data = await dataModel.findOne({ 'patientData.tokenId': tokenId });

            if (!data) {
                return res.status(404).json({ msg: 'Data not found' });
            }

            // Find the specific patient data within the document
            const patientData = data.patientData.find(patient => patient.tokenId === Number(tokenId));

            if (!patientData) {
                return res.status(404).json({ msg: 'Patient data not found' });
            }

            res.status(200).json(patientData);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.getCombinedDataByTokenId = getCombinedDataByTokenId;
