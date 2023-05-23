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
    deptpartment: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "dept"
},

    pre_requisite: {
    type: String,
    required: true,
},

});


const subjectmodel = model('subject', subject);
export default subjectmodel;
