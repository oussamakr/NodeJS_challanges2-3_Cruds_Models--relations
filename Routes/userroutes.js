const express = require("express");
const Routeuser = express.Router();
const user = require("../Models/user");
const todo = require("../Models/TodoModel");
const { findById } = require("../Models/TodoModel");

// Add user
Routeuser.post("/createuser/:id", async (req, res) => {
  try {
    id = req.params.id;
    Todo = await todo.findById({ _id: id });

    const mydata = req.body;
    my_User = new user({ ...mydata, todo: Todo.id });

    save_User = await my_User.save();

    res.status(200).send(save_User);
  } catch (error) {
    res.status(400).send(error);
  }
});

// add id_todo dans un tableau dans les users
Routeuser.put("/update/:iduser/addtodos/:idtodos", async (req, res) => {
  try {
    const id_User = req.params.iduser;
    const id_Todos = req.params.idtodos;

    const User = await user.findById({ _id: id_User });
    const Todos = await todo.findById({ _id: id_Todos });

    User.todo.push(id_Todos);

    My_User = await User.save();

    res.status(200).send(My_User);
  } catch (error) {
    res.status(500).send(error);
  }
});

// remove un id_todo
Routeuser.put("/updateuser/:ideuser/removetodo/:idtodo", async (req, res) => {
  try {
    const id_User = req.params.ideuser;
    const id_Todo = req.params.idtodo;

    my_User = await user.findById({ _id: id_User });

    my_User.todo.pull(id_Todo);

    await my_User.save();

    res.status(200).send(my_User);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get users with all todos info with populate
Routeuser.get("/getalldatauser", async (req, res) => {
  try {
    users = await user.find().populate("todo");
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

Routeuser.delete("/delateuser/:id", async (req, res) => {
  try {
    id = req.params.id;

    mydlateuser = await user.findByIdAndDelete({
      _id: id,
    });

    res.status(200).send(mydlateuser);
    console.log(`tasks with id : ${mydlateuser._id}  est effacer`);
  } catch (error) {
    res.status(400).send(error);
  }
});

Routeuser.put("/upadateuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    mynewuserchanges = req.body;
    mynewuser = await todo.findByIdAndUpdate(
      {
        _id: id,
      },
      mynewuserchanges
    );

    res.status(200).send(mynewuser);
    console.log(
      `todo before : ${req.body} and todo after update  : ${mynewuser}`
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

Routeuser.get("/retrieveuser", async (req, res) => {
  try {
    alltodouser = await user.find();
    res.status(200).send(alltodouser);
  } catch (error) {
    res.status(400).send(error);
  }
});

Routeuser.get("/retrieveuser/:id", async (req, res) => {
  try {
    id = req.params.id;
    const myuser = await user.findById({ _id: id });
    res.status(200).send(myuser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = Routeuser;
