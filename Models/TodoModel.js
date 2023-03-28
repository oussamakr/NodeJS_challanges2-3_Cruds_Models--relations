const mongoose = require("mongoose");

const todo = mongoose.model("todo", {
  name: {
    type: String,
  },
  discription: {
    type: String,
  },
});

module.exports = todo;
