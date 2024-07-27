const Oral = require('../schema/oral');

const getOralDetails = {
    path: '/oral/:tokenId',
    method: 'get',
    handler: async (req, res) => {
        const { tokenId } = req.params;

        try {
            // Find oral health index details by tokenId
            const oral = await Oral.findOne({ tokenId });

            if (!oral) {
                return res.status(404).json({ msg: 'Oral health index details not found' });
            }

            // Respond with oral health index details
            res.status(200).json(oral);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.getOralDetails=getOralDetails
