import mongoose, { Schema } from 'mongoose';

const CoffeeSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, '5 characters long at least'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, '10 characters long at least'],
  },
  boughtLocation: {
    type: String,
    required: true,
    minLength: [1, '10 characters long at least'],
  },
  flavor: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
}, { timestamps: true });

export default mongoose.model('Coffee', CoffeeSchema);
