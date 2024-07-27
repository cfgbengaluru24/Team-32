const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const Oral = require('../schema/oral');
const Data = require('../schema/data');

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: 'dun8ewmxo',
    api_key: '842216518266228',
    api_secret: ''
});

const uploadImages = {
    path: '/upload-images',
    method: 'post',
    handler: async (req, res) => {
        const { folderPath } = req.body;

        if (!folderPath) {
            return res.status(400).json({ msg: 'Please provide folderPath' });
        }

        try {
            // Read all files from the specified folder
            const files = fs.readdirSync(folderPath);

            for (const file of files) {
                const filePath = path.join(folderPath, file);

                // Extract tokenId from filename (assuming filename is tokenId.ext)
                const tokenId = path.basename(file, path.extname(file));
                console.log(`Processing tokenId: ${tokenId}`);

                // Read the image file
                const imageData = fs.readFileSync(filePath);

                // Upload image to Cloudinary
                const result = await new Promise((resolve, reject) => {
                    cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    }).end(imageData);
                });

                // Extract the URL from Cloudinary response
                const photoUrl = result.secure_url;
                console.log(`Uploaded photoUrl: ${photoUrl}`);

                // Check if a document with the given tokenId already exists in the Oral collection
                const existingOral = await Oral.findOne({ tokenId });

                if (existingOral) {
                    // Append new photoUrl to the existing record
                    existingOral.photoUrl.push(photoUrl);

                    // Save the updated record
                    await existingOral.save();
                } else {
                    // Create new oral health index instance
                    const newOral = new Oral({
                        tokenId,
                        dIndex: [],
                        cIndex: [],
                        photoUrl: [photoUrl]
                    });

                    // Save oral health index to database
                    await newOral.save();
                }

                // Check if a document with the given tokenId exists in the Data collection
                const existingData = await Data.findOne({ 'patientData.tokenId': tokenId });

                if (existingData) {
                    // Find the specific patient data within the document
                    const patientData = existingData.patientData.find(patient => patient.tokenId === Number(tokenId));

                    if (patientData) {
                        // Initialize photoUrl array if it doesn't exist
                        if (!patientData.oralHealIndex) {
                            patientData.oralHealIndex = { dIndex: [], cIndex: [], photoUrl: [] };
                        }

                        if (!patientData.oralHealIndex.photoUrl) {
                            patientData.oralHealIndex.photoUrl = [];
                        }

                        // Append new photoUrl to the existing record
                        if (!patientData.oralHealIndex.photoUrl.includes(photoUrl)) {
                            patientData.oralHealIndex.photoUrl.push(photoUrl);
                        }

                        // Save the updated document
                        await existingData.save();
                    }
                }
            }

            res.status(200).json({ msg: 'All images uploaded and URLs updated successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.uploadImages = uploadImages;
