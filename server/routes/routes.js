import express from 'express';

import { signupUser, loginUser, formData } from '../controller/user-controller.js';



const router = express.Router();


router.post('/signup', signupUser);

router.post('/login', loginUser);

router.post('/formed', formData);
export default router;