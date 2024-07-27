const Anemia = require('../schema/anemia'); 

const getAnemiaDetails = {
    path: '/anemia/:tokenId',
    method: 'get',
    handler: async (req, res) => {
        const { tokenId } = req.params;

        try {
            // Find anemia details by tokenId
            const anemia = await Anemia.findOne({ tokenId });

            if (!anemia) {
                return res.status(404).json({ msg: 'Anemia details not found' });
            }

            // Respond with anemia details
            res.status(200).json(anemia);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.getAnemiaDetails=getAnemiaDetails