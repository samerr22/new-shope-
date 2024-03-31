import express from 'express';
import { signout, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/VerfiyUser.js';

const router = express.Router();


router.get('/test', test); 
router.put( '/update/:userId',verifyToken, updateUser);
router.post('/signout', signout);


export default router;