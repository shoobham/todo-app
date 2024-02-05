const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mongouser:HFRTFOGygzaOrY2L@cluster0.dawtyml.mongodb.net/todos?retryWrites=true&w=majority");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}