// routes/questionsRoutes.js
const express = require('express');
const router = express.Router();
const { getQuestionsByTopic, addNewQuestion, deleteQuestion } = require('../controllers/questionsController');

// Define the routes
router.get('/', getQuestionsByTopic);
router.post('/', addNewQuestion);
router.delete('/:id', deleteQuestion);
 // Add the delete question route

module.exports = router;
