import { Router } from "express";
import { create, index,store ,show,edit,update,deleteOne} from "../controllers/department.js";

import deptmodel from "../models/department.js";
import subjectmodel from "../models/subject.js";
import studentmodel from "../models/student.js";
const router = new Router();


router.get('/',index);
router.get('/create', create);
router.post('/',store);
router.get('/:_id/edit',edit);
router.put('/:_id',update);
router.delete('/:_id',deleteOne);
router.get('/:_id',show);
export default router;