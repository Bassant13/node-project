import deptmodel from "../models/department.js";
import subjectmodel from "../models/subject.js";
import  jwt  from "jsonwebtoken";

export const index = async(req, res) => {
    console.log(req.user);
    
    const department = await deptmodel.find({},{name: 1}).lean();
    
    res.render('departments/index',{ department });
};
 export const create = async (req,res) => {
    const department =await deptmodel.find().lean();
    res.render('departments/create');
  
};
export const store =async (req,res) =>{
    const {name, code } = req.body;
    
    await deptmodel.create({
        name,
        code,
    });
    res.redirect('/department')
};

export const show =async(req,res)=>{
    const {_id }= req.params;
    const  singledepartment = await deptmodel.findById(_id).lean();
    
    res.render('departments/show',{department: singledepartment});
    
    };

export const edit = async (req,res) => {
        const {_id} =req.params;
        const editdepartment = await deptmodel.findById(_id).lean();
        const department =await deptmodel.find().lean();
        res.render('departments/edit',{department,deptmodel: editdepartment});
      
    };
    export const update =async (req,res) =>{
        const {name, code } = req.body;
        const {_id} = req.params;
        await department.findByIdAndUpdate(_id,{$set: { name: name,code: code}})
     return  res.redirect('/department');
    };

    export const deleteOne=async(req,res) => {
        const {_id} = req.body;
        await department.findByIdAndDelete(_id);


        return res.redirect('/department')



    };