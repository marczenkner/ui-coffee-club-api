import mongoose, {Schema} from 'mongoose';

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
    }
}, { timestamps: true });

export default mongoose.model('Coffee', CoffeeSchema);