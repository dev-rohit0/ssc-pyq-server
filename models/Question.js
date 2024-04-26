// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_id: {
        type: String,
        required: true,
        unique: true
    },
    question_text: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correct_answer: {
        type: String,
        required: true
    },
    year_asked: {
        type: Number,
        required: true
    },
    topic: {
        type: String,
        required: true
    }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
