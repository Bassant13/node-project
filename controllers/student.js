import deptmodel from "../models/department.js";
import studentmodel from "../models/student.js";
import subjectmodel from "../models/subject.js";

import  jwt  from "jsonwebtoken";

export const index = async(req, res) => {
    console.log(req.user);
    
    const student = await studentmodel.find({},{name: 1}).lean();
    
    res.render('students/index',{ student });
};
 export const create = async (req,res) => {
    const student =await studentmodel.find().lean();
    res.render('students/create');
  
};
export const store =async (req,res) =>{
    const {username, password,id } = req.body;
    
    await studentmodel.create({
        username,
        password,
        id,
    });
    res.redirect('/students')
};

export const show =async(req,res)=>{
    const {_id }= req.params;
    const  singlestudent = await studentmodel.findById(_id).lean();
    
    res.render('students/show',{student: singlestudent});
    
    };

    export const edit = async (req,res) => {
        const {_id} =req.params;
        const editdstudent = await studentmodel.findById(_id).lean();
        const student =await studentmodel.find().lean();
        res.render('students/edit',{student,studentmodel: editdstudent});
      
    };
    export const update =async (req,res) =>{
        const {username, password,id } = req.body;
        const {_id} = req.params;
        await student.findByIdAndUpdate(_id,{$set: { username: username,password: password,id: id}})
       res.redirect('/students');
    };
    
    export const deleteOne=async(req,res) => {
        const {_id} = req.body;
        await student.findByIdAndDelete(_id);


        return res.redirect('/students')



    };