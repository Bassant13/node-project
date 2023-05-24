import deptmodel from "../models/department.js";
import subjectmodel from "../models/subject.js";
import  jwt  from "jsonwebtoken";
export const index = async(req, res) => {
    
    const subjects = await subjectmodel.find({doctor: req.user._id},{name: 1}).lean();
    
    res.render('subjects/index',{ subjects });
};

export const create = async(req,res) => {
    const subjects = await deptmodel.find().lean();
    res.render('subjects/create',{subjects});
   

};

export const store = async(req,res) => {
    const {name,id,department,pre_requisite} = req.body;
    await subjectmodel.create({
        name,
        id,
        department,
        pre_requisite,
        doctor: req.user._id,
    });
    res.redirect('/subject')
};

export const show =async(req,res)=>{
const { _id }= req.params;
const  singlesubject = await subjectmodel.findById(_id).populate('department').lean();

res.render('subjects/show',{subject: singlesubject});

};
export const edit = async (req,res) => {
    const {_id} =req.params;
    const editsubject = await subjectmodel.findById(_id).lean();
    const subject =await subjectmodel.find().lean();
    res.render('subjects/edit',{subject,subjectmodel: editsubject});
  
};
export const update =async (req,res) =>{
    const {name,id,department,pre_requisite } = req.body;
    const {_id} = req.params;
    await subject.findByIdAndUpdate(_id,{$set: { name: name,id: id,department: department,pre_requisite: pre_requisite}})
   res.redirect('/subject');
};
export const deleteOne=async(req,res) => {
    const {_id} = req.body;
    await subject.findByIdAndDelete(_id);


    return res.redirect('/subject')



};