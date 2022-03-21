const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
    CardNumber: { type: Number, required: true },
    ExpData: { type: String, required: true },
    CVV: { type: Number, required: true },
    Amount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Card = model("Card", cardSchema);

module.exports = Card;