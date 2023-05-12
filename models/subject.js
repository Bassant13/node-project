import { Schema , model } from "mongoose";

const subject=new Schema({
    name: {
        type: String,
        required: true,
    },
    
    code: {
    type: String,
    required: true,
},

    pre_requisite: {
    type: String,
    required: true,
},

});


const subjectmodel = model('subject', subject);
export default subjectmodel;
