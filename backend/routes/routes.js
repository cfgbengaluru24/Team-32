const { postMessageDetailsRoute } = require('./post_message_details');
const { postLoginRoute }= require('./post_login_details');
const {postRegisterDetails}=require('./post_register_details');
const { getPatientData } = require('./get_patient_deails');
const { postPatientData } = require('./post_patient_data');
const { postAnemiaDetails } = require('./post_anemia_details');
const { getAnemiaDetails } = require('./get_anemia_details');
const { postOralDetails } = require('./post_oral_details');
const { getOralDetails } = require('./get_oral_details');
const { getUserDataByToken } = require('./get_user_data_by_token');
const { postCombinedDataByToken } = require('./post_combined_patient_data');
const { getCombinedDataByTokenId } = require('./get_combined_patient_details');
const { getDataByLocation } = require('./get_user_data_by_location');


const routes = [
    postMessageDetailsRoute,
    postLoginRoute,
    postRegisterDetails,
    getPatientData,
    postPatientData,
    postAnemiaDetails,
    getAnemiaDetails,
    postOralDetails,
    getOralDetails,
    getUserDataByToken,
    postCombinedDataByToken,
    getCombinedDataByTokenId,
    getDataByLocation
];

module.exports = { routes };
