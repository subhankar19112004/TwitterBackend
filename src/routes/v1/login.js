import express from 'express';
import {signupUser, signinUser} from '../../controllers/userController.js';


const router = express.Router();

router.post('/signup', signupUser);
router.post('/signin', signinUser);

export default router;