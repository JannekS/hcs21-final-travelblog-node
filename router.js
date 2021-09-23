const express = require("express");
// const authorController = require("./controllers/authorController");
const postController = require("./controllers/postController");
// const homepageController = require("./controllers/homepageController");

const router = express.Router();

/* router.get("/", homepageController.renderHomepage);
router.get("/authors", authorController.renderAuthors);
router.get("/author", authorController.renderAuthor);
router.get("/new_author", authorController.createAuthor);
router.post("/new_author", authorController.createAuthor); */

router.get("/posts", postController.servePreviews);
// router.get("/post", postController.renderPost);
/* router.get("/new_post", postController.createPost);
router.post("/new_post", postController.createPost); */

module.exports = router;