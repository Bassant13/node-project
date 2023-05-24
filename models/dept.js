import { Schema , model} from "mongoose";

const dept=new Schema({
    name: {
        type: String,
        required: true,
    },
    
    code: {
    type: String,
    required: true,
},
});


const deptmodel = model('dept', dept);
export default deptmodel;
