const express = require("express");
const postController = require("./controllers/postController");

const router = express.Router();

router.get("/posts", postController.servePreviews);
router.get("/post/:id", postController.servePost);
/* router.get("/new_post", postController.createPost);
router.post("/new_post", postController.createPost); */

module.exports = router;