import mongoose from "mongoose";

import Teachers from "./teachers.js";


const subjectScheema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    Branch : {
        type : String,
        required : false
    },
    Section : {
        type : String,
        required : false
    },
    Semester : {
        type : Number,
        required : false
    },

    teacher : {
        required : true,
        type: String
    },

    

})

const Subjects = mongoose.model("Subject", subjectScheema);

export default Subjects;