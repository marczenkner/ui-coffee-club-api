import Section from './section-model';
import Question from "../questions/question-model";

export const getSections = async (req, res) => {
    try {
        return res.status(200).json(await Section.find({}));
    } catch (error) {
        return res.status(error.status).json({ error: true, message: 'Error getting Sections' });
    }
};

export const editSection = async (req, res) => {
    const {
        sectionId,
        sectionText,
        sectionTextSecondary,
        sectionOrder,
        sectionStyles } = req.body;


    try {
        const result = await Section.findByIdAndUpdate(sectionId, {
            sectionId,
            sectionText,
            sectionTextSecondary,
            sectionOrder,
            sectionStyles,
        }, {new: true});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

export const createSection = async (req, res) => {
    const {
        sectionId,
        sectionText,
        sectionTextSecondary,
        sectionOrder,
        sectionStyles } = req.body;

    const sectionExists = await Section.findOne({sectionId: sectionId});

    if (sectionExists) { res.send('A Section with this ID already exists. Please use a different ID'); return }

    const newSection = new Section({
        sectionId,
        sectionText,
        sectionTextSecondary,
        sectionOrder,
        sectionStyles });
    try {
        res.send(newSection.save());
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error creating new Section.' });
    }
};

export const deleteSection = async (req, res) => {
    const id = req.body.id;
    console.log(req.body, 'delete section called');
    Section.findOneAndDelete({sectionId: id}).then((removedSection) => {
            res.status(202).send(removedSection);
        },
        (e) => {
            console.log(e, 'we have error');
            res.status(400).send('Error deleting section', e);
        });
};

