import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const studentScheema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : false
    },
    semester: {
        type: Number,
        required: false
    },
    section: {
        type: String,
        required: false
    },
    branch: {
        type: String,
        required: false
    },
    googleId: {
        type : String,
        required: false,
    }
})

studentScheema.plugin(findOrCreate);

var Students = mongoose.model("Student", studentScheema);

export default Students;