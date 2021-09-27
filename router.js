const express = require("express");
const postController = require("./controllers/postController");

const router = express.Router();

router.get("/posts", postController.servePreviews);
router.get("/post/:id", postController.servePost);

module.exports = router;