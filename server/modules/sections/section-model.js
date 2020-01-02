import mongoose, { Schema } from 'mongoose';

const SectionSchema = new Schema({
    sectionId: {
        type: Number,
        required: true,
    },
    sectionText: {
        type: String,
        required: true,
        minLength: [5, '5 characters long at least'],
    },
    sectionTextSecondary: {
        type: String,
    },
    sectionOrder: {
        type: Number,
    },
    sectionStyles: {
        type: Object,
    },

},{ timestamps: true });

export default mongoose.model('Section', SectionSchema);
