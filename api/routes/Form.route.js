import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { createe, deleteForm, getForm } from "../controllers/Form.controller.js";


const router = express.Router();


router.post('/creat',  createe);
router.get('/getform', verifyToken, getForm);
router.delete('/deleteform/:FormId', verifyToken, deleteForm)


export default router;