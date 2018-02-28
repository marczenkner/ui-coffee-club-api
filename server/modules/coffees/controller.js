import Coffee from './coffee-model';

export const createCoffee = async (req, res) => {
    const { title, description } = req.body;
    console.log(title, description);
    const newCoffee = new Coffee({ title, description });

    try {
        return res.status(201).json({ coffee: await newCoffee.save() });
    } catch(e) {
        return res.status(e.status).json({ error: true, message: 'Error creating new Coffee.' });
    }
};