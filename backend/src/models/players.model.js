const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const playerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age : {
        type : String,
        required : true
    },
    
  },
  { timestamps: true }
);


const Player = mongoose.model("Player", playerSchema);
module.exports = User;
