import mongoose, { Schema } from 'mongoose';

const QuestionSchema = new Schema({
  questionText: {
    type: String,
    required: true,
    minLength: [5, '5 characters long at least'],
  },
  questionOrder: {
    type: Number,
  },
  questionWeight: {
    type: Number,
    required: true,
  },
  questionSection: {
    type: Number,
    required: true,
  },
  questionHasInput: {
    type: Boolean,
  },
  questionInputType: {
    type: String,
    required: true,
  },
  questionInputText: {
    type: String,
  },
  questionIsDependant: {
    type: Boolean,
  },
  questionIsDependantOn: {
    type: String,
    // required: () => this.questionIsDependant.type === true,
  },
  questionCustomBackground: {
    type: String,
  },
  questionStyles: {
    type: {},
  },
  questionIsVisible: {
    type: Boolean,
    required: true,
  },
},{ timestamps: true });

export default mongoose.model('Question', QuestionSchema);
