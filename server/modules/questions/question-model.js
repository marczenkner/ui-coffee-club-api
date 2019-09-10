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
    type: String,
    required: true,
  },
  questionInputText: {
    type: String,
    required: true,
  },
  questionIsDependantOn: {
    type: Number,
    // required: () => this.questionIsDependant.type === true,
  },
  questionDependants: {
    type: Array,
    // required: () => this.questionIsDependant.type === true,
  },
  questionIsVisible: {
    type: String,
  },
  questionInputCaptions: {
    type: Array,
  },
  questionInputValues: {
    type: Array,
  },
  questionInputStyles: {
    type: {},
  },

},{ timestamps: true });

export default mongoose.model('Question', QuestionSchema);
