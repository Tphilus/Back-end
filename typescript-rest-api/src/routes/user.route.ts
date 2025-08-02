import express from 'express';
import { loginUser, registerUser } from '../controllers/user.controller';
import { verifyOtp } from '../middleware/verifyOtp';

const router = express.Router();

router.post('/register', registerUser);
// router.post('/verify-otp', verifyOtp);
router.post('/login', loginUser);


export { router as userRouter };