const dataModel = require('../schema/data');

const getDataByLocation = {
    path: '/data/loc/:location',
    method: 'get',
    handler: async (req, res) => {
        const { location } = req.params;
        console.log(location)
        try {
            // Find documents with the specified location
            const data = await dataModel.find({ 'patientData.location': location });

            if (data.length === 0) {
                return res.status(404).json({ msg: 'No patients found for the specified location' });
            }

            // Extract patient data from the results
            const patients = data.map(d => d.patientData).flat();

            // Send the patient data in the response
            res.status(200).json(patients);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.getDataByLocation = getDataByLocation;
