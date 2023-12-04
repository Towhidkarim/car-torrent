import { Schema, model, models } from 'mongoose';
import { RentDataType, type CarData, type UserType } from '../types';

const carSchema = new Schema<CarData>({
  carName: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: false },
  carId: { type: Number, required: true },
  currentRent: { type: Number, required: true },
  actualRent: { type: Number, required: false },
  capacity: { type: Number, required: true },
  steeringMode: { type: String, required: true },
  gasoline: { type: Number, required: true },
});

export const Cars = models?.Cars || model('Cars', carSchema);

const userSchema = new Schema<UserType>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rentals: { type: Array, required: false },
});
export const Users = models?.Users || model('Users', userSchema);
