const dataModel = require('../schema/data');

const getAllData = {
    path: '/data/patients/all',
    method: 'get',
    handler: async (req, res) => {
        try {
            const data = await dataModel.find({});
            if (data.length === 0) {
                return res.status(404).json({ msg: 'No records found' });
            }
            res.status(200).json(data);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.getAllData = getAllData;
