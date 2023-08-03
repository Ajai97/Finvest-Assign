const mongoose =require('mongoose')
const AdddetailsSchema= new mongoose.Schema({
    srno:String,
    name:String,
    image:String,
    category:String,
    label:String,
    price:String,
    description:String




})
const AdddetailsModel=mongoose.model("adddetails",AdddetailsSchema)
module.exports=AdddetailsModel
