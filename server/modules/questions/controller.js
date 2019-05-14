import Question from './question-model';

export const getQuestions = async (req, res) => {
  try {
    return res.status(200).json(await Question.find({}));
  } catch (error) {
    return res.status(error.status).json({ error: true, message: 'Error getting Questions' });
  }
};

export const editQuestion = async (req, res) => {
    console.log('editQuestion called with ', req, res);
};

export const createQuestion = async (req, res) => {
    const { questionText, questionOrder, questionWeight, questionSection, questionHasInput, questionInputType, questionInputText, questionIsDependant, questionIsDependantOn, questionCustomBackground, questionStyles, questionIsVisible } = req.body;

    if (!questionText) {
        return res.status(400).json({ error: true, message: 'Question Text must be provided!' });
    }

    if (!questionWeight) {
        return res.status(400).json({ error: true, message: 'Question Weight must be provided!' });
    }

    if (!questionSection) {
        return res.status(400).json({ error: true, message: 'Question Section must be provided!' });
    }

    if (!questionInputType) {
        return res.status(400).json({ error: true, message: 'Question Input Type must be provided!' });
    }

    if (!questionIsVisible) {
        return res.status(400).json({ error: true, message: 'Question IsVisible must be provided!' });
    }

    const newQuestion = new Question({ questionText, questionOrder, questionWeight, questionSection, questionHasInput, questionInputType, questionInputText, questionIsDependant, questionIsDependantOn, questionCustomBackground, questionStyles, questionIsVisible });

  try {
    return res.status(201).json({ await newQuestion.save());
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error creating new Question.' });
  }
};

export const deleteQuestion = async (req, res) => {
    console.log('deleteQuestion called with ', req, res);
};
