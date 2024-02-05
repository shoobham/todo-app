//write basic express code with express.json() middleware
const express = require("express");
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db");
const {response} = require("express");
const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    //put in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });

});

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
});

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "todo marked as complete"
    })
});