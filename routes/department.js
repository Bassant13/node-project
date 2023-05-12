import { Router } from "express";

import deptmodel from "../models/dept.js";
import subjectmodel from "../models/subject.js";
const router = new Router();

router.get('/department', (req , res)=>{
res.render('departments/deptpage');
});

router.get('/createdept', async(req, res) => {

    const departments = await deptmodel.find().lean();

await deptmodel.create({
    name: 'Computer Science',
    code: 'CS',
    

});
await deptmodel.create({
    name: 'Information Systems',
    code: 'IS',
    

});
await deptmodel.create({
    name: 'Information Technology',
    code: 'IT',
    

});
res.render('departments/deptpage',{ departments });
});

export default router;