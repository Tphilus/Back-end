import { UserModel } from '../models/user';
import { Request, Response } from 'express';

export const verifyOtp = async (req: Request, res: Response): Promise<void> => {
  const { username, otp } = req.body;

  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    if (user.otp !== otp) {
      res.status(400).json({ error: 'Invalid OTP' });
      return;
    }

    user.isVerified = true;
    user.otp = undefined;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: 'OTP verified successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
