const Oral = require('../schema/oral');

const postOralDetails = {
    path: '/oral',
    method: 'post',
    handler: async (req, res) => {
        const { tokenId, dIndex, cIndex, photoUrl } = req.body;

        // Input validation
        if (!tokenId || !dIndex || !cIndex || !photoUrl) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        try {
            // Create new oral health index instance
            const newOral = new Oral({
                tokenId,
                dIndex,
                cIndex,
                photoUrl
            });

            // Save oral health index to database
            await newOral.save();

            // Respond with success message
            res.status(201).json({ msg: 'Oral health index details added successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postOralDetails=postOralDetails