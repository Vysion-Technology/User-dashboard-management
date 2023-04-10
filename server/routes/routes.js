import express from 'express';

import { signupUser, loginUser, formData, addMember,getMember, verifyOtp } from '../controller/user-controller.js';




const router = express.Router();


router.post('/signup', signupUser);

router.post('/login', loginUser);

router.post('/formed', formData);

router.post('/addMember', addMember);

router.get('/getAddMember',getMember);

router.post('/verification', verifyOtp);

export default router;