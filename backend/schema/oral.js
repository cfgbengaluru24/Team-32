const mongoose=require('mongoose')
const oralSchema=new mongoose.Schema({
    tokenId:Number,
    dIndex:Number,
    cIndex:Number,
    photoUrl:String
})

module.exports=mongoose.model('oral',oralSchema)