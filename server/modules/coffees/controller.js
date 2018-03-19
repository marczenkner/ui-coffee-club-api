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

export const getCoffees = async (req, res) => {
    console.log('get coffees called');
    try {
        return res.status(200).json({ coffees: await Coffee.find({_id: "5a96c4924288d1045dd75b2f"}) });
    } catch(error) {
        return res.status(error.status).json({ error: true, message: 'Error getting Coffees' });
    }
}