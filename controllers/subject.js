import deptmodel from "../models/dept.js";
import subjectmodel from "../models/subject.js";
export const index = async(req, res) => {

    const subjects = await subjectmodel.find({},{name: 1}).lean();

    res.render('subjects/index',{ subjects });
};

export const create = async(req,res) => {
    const departments = await deptmodel.find().lean();
    res.render('subjects/create',{departments});
   

}

export const store = async(req,res) => {
    const {name, code , department,pre_requisite} = req.body;
    
    await subjectmodel.create({
        name,
        code,
        department,
        pre_requisite,
    });
    res.redirect('/sub')
    console.log(name);
};