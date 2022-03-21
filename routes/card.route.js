const { Router } = require("express");
const { cardController } = require("../controllers/card.controller");

const router = Router();

router.post("/pay", cardController.postCard);
router.get("/cards", cardController.getCards);

module.exports = router;