const express = require("express");
const Route = express.Router();
const todo = require("../Models/TodoModel");

Route.post("/create", async (req, res) => {
  try {
    const mydata = req.body;
    mytodo = new todo(mydata);

    savetodo = await mytodo.save();

    res.status(200).send(savetodo);
  } catch (error) {
    res.status(400).send(error);
  }
});

Route.delete("/delate/:id", async (req, res) => {
  try {
    id = req.params.id;

    mydlatetodo = await todo.findByIdAndDelete({
      _id: id,
    });

    res.status(200).send(mydlatetodo);
    console.log(`tasks with id : ${mydlatetodo._id}  est effacer`);
  } catch (error) {
    res.status(400).send(error);
  }
});

Route.put("/upadate/:id", async (req, res) => {
  try {
    const id = req.params.id;
    mynewtodochanges = req.body;
    mynewtodo = await todo.findByIdAndUpdate(
      {
        _id: id,
      },
      mynewtodochanges
    );

    res.status(200).send(mynewtodo);
    console.log(
      `todo before : ${req.body} and todo after update  : ${mynewtodo}`
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

Route.get("/retrieve", async (req, res) => {
  try {
    alltodolist = await todo.find();
    res.status(200).send(alltodolist);
  } catch (error) {
    res.status(400).send(error);
  }
});

Route.get("/retrieve/:id", async (req, res) => {
  try {
    id = req.params.id;
    const mytodo = await todo.findById({ _id: id });
    res.status(200).send(mytodo);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = Route;
