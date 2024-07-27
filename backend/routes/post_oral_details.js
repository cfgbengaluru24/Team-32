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
            // Check if document with the same tokenId exists
            const existingOral = await Oral.findOne({ tokenId });

            if (existingOral) {
                // Append new dIndex and cIndex values
                existingOral.dIndex.push(dIndex);
                existingOral.cIndex.push(cIndex);
                existingOral.photoUrl.push(photoUrl); // Append new photoUrl

                // Save the updated document
                await existingOral.save();

                return res.status(200).json({ msg: 'Oral health index details updated successfully' });
            } else {
                // Create new oral health index instance
                const newOral = new Oral({
                    tokenId,
                    dIndex: [dIndex], // Initialize as array
                    cIndex: [cIndex], // Initialize as array
                    photoUrl: [photoUrl] // Initialize as array
                });

                // Save oral health index to database
                await newOral.save();

                return res.status(201).json({ msg: 'Oral health index details added successfully' });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postOralDetails = postOralDetails;
