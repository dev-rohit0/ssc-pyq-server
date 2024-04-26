// controllers/questionsController.js
const Question = require('../models/Question');

const getQuestionsByTopic = async (req, res) => {
    try {
        const { topic } = req.query;
        if (!topic) {
            return res.status(400).json({ error: 'Topic is required' });
        }

        const questions = await Question.find({ topic });
        res.json({ topic, questions });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const addNewQuestion = async (req, res) => {
    try {
        const { question_id, question_text, options, correct_answer, year_asked, topic } = req.body;

        const newQuestion = new Question({
            question_id,
            question_text,
            options,
            correct_answer,
            year_asked,
            topic
        });

        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(400).json({ error: 'Error creating question' });
    }
};

const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;

        // Verify that the ID is not undefined
        if (!id) {
            return res.status(400).json({ error: 'Invalid request: ID is required' });
        }

        // Find the question by ID and remove it from the database
        const deletedQuestion = await Question.findByIdAndDelete(id);

        // Check if a question was found and deleted
        if (!deletedQuestion) {
            return res.status(404).json({ error: 'Question not found' });
        }

        // Respond with success message
        res.json({ message: 'Question deleted successfully', deletedQuestion });
    } catch (error) {
        console.error('Error deleting question:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getQuestionsByTopic,
    addNewQuestion,
    deleteQuestion
};
