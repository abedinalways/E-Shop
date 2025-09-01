import mongoose, { model, models } from 'mongoose';
const { Schema } = mongoose;

const productsSchema = new Schema({
  title: String,
  price: Number,
  image: String,
  id: { type: String, unique: true },
});

export default models.Products || model('Products', productsSchema);
