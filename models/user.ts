import mongoose, { model, models } from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role:{type:String, enum:['user', 'admin'], default:'user'}
})

export default models.User || model('User', userSchema);