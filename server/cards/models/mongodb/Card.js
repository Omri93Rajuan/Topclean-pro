const mongoose = require("mongoose");
const Address = require("./Address");
const Image = require("./Image");
const { DEFAULT_VALIDATION, URL } = require("../../helpers/mongooseValidators");

const cardSchema = new mongoose.Schema({
  company: DEFAULT_VALIDATION,
  title: DEFAULT_VALIDATION,
  description: {
    ...DEFAULT_VALIDATION,
    maxLength: 1024,
  },
  phone: {
    type: String,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  email: {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true,
  },
  role: DEFAULT_VALIDATION,
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  isDone: {
    type: Boolean,
    default:false
  }
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card;