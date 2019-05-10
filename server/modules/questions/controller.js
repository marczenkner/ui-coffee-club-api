import Question from './question-model';

export const createQuestion = async (req, res) => {
  const { title, description, boughtLocation, flavor, rating } = req.body;

  if (!title) {
    return res.status(400).json({ error: true, message: 'Title must be provided!' });
  } else if (typeof title !== 'string') {
    return res.status(400).json({ error: true, message: 'Title must be a string!' });
  } else if (title.length < 5) {
    return res.status(400).json({ error: true, message: 'Title must be at least 5 characters long!' });
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must be provided!' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Description must be a string!' });
  } else if (description.length < 5) {
    return res.status(400).json({ error: true, message: 'Description must be at least 10 characters long!' });
  }

  if (!boughtLocation) {
    return res.status(400).json({ error: true, message: 'Where bought must be provided!' });
  } else if (typeof boughtLocation !== 'string') {
    return res.status(400).json({ error: true, message: 'Where bought must be a string!' });
  } else if (boughtLocation.length < 3) {
    return res.status(400).json({ error: true, message: 'Where bought must be at least 3 characters long!' });
  }

  if (!flavor) {
    return res.status(400).json({ error: true, message: 'Flavor must be provided!' });
  }

  // else if (typeof flavor !== 'array') {
  //     return res.status(400).json({ error: true, message: 'Flavor must be an array!' });
  // }

  else if (flavor.length < 1) {
    return res.status(400).json({ error: true, message: 'Please define at least one flavor.' });
  }

  if (!rating) {
    return res.status(400).json({ error: true, message: 'Rating must be provided!' });
  }

  // else if (typeof rating != 'number') {
  //     return res.status(400).json({ error: true, message: 'Rating must be a number!' });
  // }

  else if (rating > 10 || rating < 0) {
    return res.status(400).json({ error: true, message: 'Rating must be a number between 0 and 10' });
  }

  const newCoffee = new Question({ title, description, boughtLocation, flavor, rating });

  try {
    return res.status(201).json({ coffee: await newCoffee.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error creating new Coffee.' });
  }
};

export const getQuestion = async (req, res) => {
  try {
    return res.status(200).json({ coffees: await Question.find({}) });
  } catch (error) {
    return res.status(error.status).json({ error: true, message: 'Error getting Coffees' });
  }
};
