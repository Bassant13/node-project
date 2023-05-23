import { Router } from "express";


import { create, index,store } from "../controllers/subject.js";
const router = new Router();

router.get('/subject', (req , res)=>{
res.render('subjects/create');
});

router.get('/', index);
router.get('/create', create);

router.post('/',store);
  /*  await subjectmodel.create({
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
    */




export default router;