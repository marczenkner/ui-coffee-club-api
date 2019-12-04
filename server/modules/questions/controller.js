import Question from './question-model';

export const getQuestions = async (req, res) => {
  try {
    return res.status(200).json(await Question.find({}));
  } catch (error) {
    return res.status(error.status).json({ error: true, message: 'Error getting Questions' });
  }
};

export const editQuestion = (req, res) => {
    const {
        questionId,
        questionText,
        questionOrder,
        questionWeight,
        questionSection,
        questionInputType,
        questionInputText,
        questionIsDependantOn,
        questionDependants,
        questionIsVisible,
        questionInputCaptions,
        questionInputValues,
        questionInputStyles } = req.body;

    if (!questionId) {
        return res.status(400).json({ error: true, message: '_id must be provided!' });
    }

    if (!questionText) {
        return res.status(400).json({ error: true, message: 'questionText must be provided!' });
    } else if (questionText.length < 5) {
        return res.status(400).json({ error: true, message: 'questionText must be 5 characters long' });
    } else if (typeof questionText !== 'string') {
        return res.status(400).json({ error: true, message: 'questionText must be a string' });
    }

    if (typeof questionOrder !== 'number') {
        return res.status(400).json({ error: true, message: 'questionOrder must be a number' });
    }

    if (!questionWeight) {
        return res.status(400).json({ error: true, message: 'questionWeight must be provided!' });
    } else if (typeof questionWeight !== 'number') {
        return res.status(400).json({ error: true, message: 'questionWeight must be a number' });
    }

    if (!questionSection) {
        return res.status(400).json({ error: true, message: 'questionSection must be provided!' });
    }

    if (!questionInputType) {
        return res.status(400).json({ error: true, message: 'questionInputType must be provided!' });
    } else if (typeof questionInputType !== 'string') {
        return res.status(400).json({ error: true, message: 'questionInputType must be a string' });
    }

    if (!questionInputText) {
        return res.status(400).json({ error: true, message: 'questionInputText must be provided!' });
    } else if (typeof questionInputText !== 'string') {
        return res.status(400).json({ error: true, message: 'questionInputText must be a string' });
    }

    if (typeof questionInputCaptions !== 'object') {
        return res.status(400).json({ error: true, message: 'questionInputCaptions must be an array' });
    }

    if (typeof questionInputValues !== 'object') {
        return res.status(400).json({ error: true, message: 'questionInputValues must be an array' });
    }

    if (typeof questionInputStyles !== 'object') {
        return res.status(400).json({ error: true, message: 'questionInputStyles must be an object' });
    }

    Question.findOneAndUpdate({_id: questionId}, {
        $set: {
            questionText: questionText,
            questionOrder: questionOrder,
            questionWeight: questionWeight,
            questionSection: questionSection,
            questionInputType: questionInputType,
            questionInputText: questionInputText,
            questionIsDependantOn: questionIsDependantOn,
            questionDependants: questionDependants,
            questionIsVisible: questionIsVisible,
            questionInputCaptions: questionInputCaptions,
            questionInputValues: questionInputValues,
            questionInputStyles: questionInputStyles,
        }
    }).then((res) => {
        return res;
    },
    (error) => {
        return error;
    });
};

export const createQuestion = async (req, res) => {
    const { questionText,
            questionOrder,
            questionWeight,
            questionSection,
            questionInputType,
            questionInputText,
            questionIsDependantOn,
            questionDependants,
            questionIsVisible,
            questionInputCaptions,
            questionInputValues,
            questionInputStyles } = req.body;

    console.log(req.body);

    if (!questionText) {
        return res.status(400).json({ error: true, message: 'questionText must be provided!' });
    } else if (questionText.length < 5) {
        return res.status(400).json({ error: true, message: 'questionText must be 5 characters long' });
    } else if (typeof questionText !== 'string') {
        return res.status(400).json({ error: true, message: 'questionText must be a string' });
    }

    if (typeof questionOrder !== 'number') {
        return res.status(400).json({ error: true, message: 'questionOrder must be a number' });
    }

    if (!questionWeight) {
        return res.status(400).json({ error: true, message: 'questionWeight must be provided!' });
    } else if (typeof questionWeight !== 'number') {
        return res.status(400).json({ error: true, message: 'questionWeight must be a number' });
    }

    if (!questionSection) {
        return res.status(400).json({ error: true, message: 'questionSection must be provided!' });
    }

    if (!questionInputType) {
        return res.status(400).json({ error: true, message: 'questionInputType must be provided!' });
    } else if (typeof questionInputType !== 'string') {
        return res.status(400).json({ error: true, message: 'questionInputType must be a string' });
    }

    if (!questionInputText) {
        return res.status(400).json({ error: true, message: 'questionInputText must be provided!' });
    } else if (typeof questionInputText !== 'string') {
        return res.status(400).json({ error: true, message: 'questionInputText must be a string' });
    }
    //
    // if (typeof questionIsDependantOn !== 'number') {
    //     return res.status(400).json({ error: true, message: 'questionIsDependantOn must be a number' });
    // }
    //
    // if (questionDependants === 'object') {
    //     return res.status(400).json({ error: true, message: 'questionDependants must be an array' });
    // }
    //
    // if (typeof questionIsVisible !== 'string') {
    //     return res.status(400).json({ error: true, message: 'questionIsVisible must be a string' });
    // }

    if (typeof questionInputCaptions !== 'object') {
        return res.status(400).json({ error: true, message: 'questionInputCaptions must be an array' });
    }

    if (typeof questionInputValues !== 'object') {
        return res.status(400).json({ error: true, message: 'questionInputValues must be an array' });
    }

    if (typeof questionInputStyles !== 'object') {
        return res.status(400).json({ error: true, message: 'questionInputStyles must be an object' });
    }

    const newQuestion = new Question({
            questionText,
            questionOrder,
            questionWeight,
            questionSection,
            questionInputType,
            questionInputText,
            questionIsDependantOn,
            questionDependants,
            questionIsVisible,
            questionInputCaptions,
            questionInputValues,
            questionInputStyles });


  try {
    return res.status(201).json( await newQuestion.save());
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error creating new Question.' });
  }
};

export const deleteQuestion = (req, res) => {
    const id = req.body.id;
    Question.findOneAndDelete({_id: id}).then((removedQuestion) => {
        res.send(removedQuestion);
    },
    (e) => {
        res.send('Error deleting message', e);
    });
};
