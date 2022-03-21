const Card = require("../models/Card");

module.exports.cardController = {
  postCard: async (req, res) => {
    try {
      await Card.create({ ...req.body });
      res
        .status(200)
        .json({ RequestId: Math.floor(Math.random() * 1000), Amount: req.body.Amount });
    } catch (error) {
      console.log(error);
    }
  },
  getCards: async (req, res) => {
    try {
      const allCards = await Card.find();
      res.status(200).json(allCards);
    } catch (error) {
      console.log(error);
    }
  },
};