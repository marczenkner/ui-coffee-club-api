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
  questionInputType: {
    type: Number,
    required: true,
  },
  questionInputText: {
    type: Number,
    required: true,
  },
  questionIsDependantOn: {
    type: String,
    // required: () => this.questionIsDependant.type === true,
  },
  questionDependents: {
    type: String,
    // required: () => this.questionIsDependant.type === true,
  },
  questionIsVisible: {
    type: Boolean,
  },
  questionInputCaptions: {
    type: {},
  },
  questionInputValues: {
    type: {},
  },
  questionInputStyles: {
    type: {},
  },

},{ timestamps: true });

export default mongoose.model('Question', QuestionSchema);
