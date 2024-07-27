const Anemia = require('../schema/anemia');

const postAnemiaDetails = {
    path: '/anemia',
    method: 'post',
    handler: async (req, res) => {
        const { tokenId, haemoglobin, diagnosis, treatment } = req.body;

        if (!tokenId || !haemoglobin || !diagnosis || !treatment) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        try {
            const newAnemia = new Anemia({
                tokenId,
                haemoglobin,
                diagnosis,
                treatment
            });


            await newAnemia.save();

            res.status(201).json({ msg: 'Anemia details added successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postAnemiaDetails=postAnemiaDetails