import mongoose from "mongoose";
const dbschema=new mongoose.Schema({
    distance:{
        type:Number,
        required:true
    }
});
const schema=mongoose.model('distance',dbschema)
export default schema