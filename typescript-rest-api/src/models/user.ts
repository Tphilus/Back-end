import { Schema, model } from 'mongoose';

export interface IUser {
  _id?: string;
  username: string;
  password: string;
  availableMoney?: number;
  purchasedItems?: string[];
  otp?: string;
  isVerified?: boolean;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  availableMoney: { type: Number, default: 5000 },
  otp: { type: String },
  isVerified: { type: Boolean, default: false },
  //   purchasedItems: {}
});

export const UserModel = model<IUser>('user', UserSchema);
