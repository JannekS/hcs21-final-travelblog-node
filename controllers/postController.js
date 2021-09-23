const post = require("../db/post");
// const author = require("../db/author");

function servePreviews(req, res) {
    post.getPostPreviews(function(result) {

        // console.log(result);
        res.json(result);
    });
}

function servePost(req, res) {
    const id = req.query.id;

    post.getPostById(id, function(result) {
        const pageData = {
            post: result
        }

        author.getAuthorById(pageData.post.author_id, function(result) {
            pageData.author = result;

            res.render("post.ejs", pageData);
        });
    });
}

/* function createPost(req, res) {
    if (req.body.submitted) {
        // It would be a good idea to use the validator here
        const title = req.body.title;
        const description = req.body.description;
        const picture = req.body.image;
        const author_id = req.body.author;

        const newPost = { title, description, picture, author_id };

        console.log(newPost);

        post.insertPost(newPost, function(result) {

            author.getAllAuthors(function(result) {
                const pageData = {
                    authors: result
                }
                res.render("postNew.ejs", pageData);
            });
        });
    } else {
        author.getAllAuthors(function(result) {
            const pageData = {
                authors: result
            }
            res.render("postNew.ejs", pageData);
        });        
    }

    
} */

module.exports = { servePreviews, servePost, /* createPost */ };