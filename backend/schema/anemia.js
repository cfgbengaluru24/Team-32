const mongoose=require('mongoose')
const anemiaSchema=new mongoose.Schema({
    tokenId:Number,
    haemoglobin:Number,
    diagnosis:String,
    treatment:String
})

module.exports=mongoose.model('anemia',anemiaSchema)