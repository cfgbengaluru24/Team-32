const dataModel = require('../schema/data'); 
const patientModel = require('../schema/pateint'); 
const Anemia = require('../schema/anemia'); 
const Oral = require('../schema/oral'); 

const postCombinedDataByToken = {
    path: '/data',
    method: 'post',
    handler: async (req, res) => {
        const { tokenId } = req.body;

        if (!tokenId) {
            return res.status(400).json({ msg: 'Please provide tokenId' });
        }

        try {
            // Retrieve patient info
            const patient = await patientModel.findOne({ tokenId });
            if (!patient) {
                return res.status(404).json({ msg: 'Patient not found' });
            } 

            // Retrieve anemia info
            const anemia = await Anemia.findOne({ tokenId });
            if (!anemia) {
                return res.status(404).json({ msg: 'Anemia info not found' });
            }

            // Retrieve oral health index info
            const oral = await Oral.findOne({ tokenId });
            if (!oral) {
                return res.status(404).json({ msg: 'Oral health index info not found' });
            }

            // Create the patient data object
            const patientData = {
                tokenId: patient.tokenId,
                firstName: patient.firstName,
                lastName: patient.lastName,
                phoneNumber: patient.phoneNumber,
                age: patient.age,
                weight: patient.weight,
                height: patient.height,
                sex: patient.sex,
                bp: patient.bp,
                location:patient.location,
                anemia: {
                    haemoglobin: anemia.haemoglobin,
                    diagnosis: anemia.diagnosis,
                    treatment: anemia.treatment
                },
                oralHealIndex: {
                    dIndex: oral.dIndex,
                    cIndex: oral.cIndex,
                    photoUrl: oral.photoUrl
                }
            };
            
            const newData = new dataModel({
                patientData: [patientData]
            });
            await newData.save();

         res.status(201).json({ msg: 'Data combined and saved successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

module.exports.postCombinedDataByToken = postCombinedDataByToken;
