const mongoose = require('mongoose');
const Anemia = require('../schema/anemia');

const postAnemiaDetails = {
    path: '/anemia',
    method: 'post',
    handler: async (req, res) => {
        const { tokenId, haemoglobin, diagnosis, treatment } = req.body;

        // Input validation
        if (!tokenId || !haemoglobin) {
            return res.status(400).json({ msg: 'Please provide tokenId and haemoglobin' });
        }

        try {
            // Check if a document with the given tokenId already exists
            const existingRecord = await Anemia.findOne({ tokenId });

            if (existingRecord) {
                // If exists, update the haemoglobin array by appending the new values
                existingRecord.haemoglobin.push(haemoglobin); // Append new values

                // Update diagnosis and treatment only if provided
                if (diagnosis) {
                    existingRecord.diagnosis = diagnosis;
                }
                if (treatment) {
                    existingRecord.treatment = treatment;
                }

                // Save the updated record
                await existingRecord.save();

                res.status(200).json({ msg: 'Anemia details updated successfully' });
            } else {
                // If not exists, create a new record
                const newAnemia = new Anemia({
                    tokenId,
                    haemoglobin:[haemoglobin],
                    diagnosis,
                    treatment
                });

                await newAnemia.save();

                res.status(201).json({ msg: 'Anemia details added successfully' });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postAnemiaDetails = postAnemiaDetails;
