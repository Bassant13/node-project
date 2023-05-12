import { Router } from "express";

import deptmodel from "../models/dept.js";
import subjectmodel from "../models/subject.js";
const router = new Router();

router.get('/subject', (req , res)=>{
res.render('subjects/subjectpage');
});

router.get('/createsubject', async(req, res) => {

    const subjects = await subjectmodel.find().lean();


    await subjectmodel.create({
        name: 'java',
        code: 'cs',
        pre_requisite: 'oop',

    });
    await subjectmodel.create({
        name: 'ml',
        code: 'cs',
        pre_requisite: 'ai',

    });
    await subjectmodel.create({
        name: 'system-2',
        code: 'is',
        pre_requisite: 'system-1',

    });    
    
    res.render('subjects/subjectpage',{ subjects });
});


export default router;