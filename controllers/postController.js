const post = require("../db/post");

function servePreviews(req, res) {
    post.getPostPreviews(function(result) {

        console.log(result);

        if (result) {
            res.json(result);
        } else {
            res.json(false);
        }

        
    });
}

function servePost(req, res) {
    const id = req.params.id;

    post.getPostById(id, function(result) {
        
        // you could calculate the trip duartion here and add it as a property to the result

        console.log(result);

        if (result) {
            result.status = "OK";
            res.json(result);
        } else {
            
            res.json({status: "Failed" }); // --> serve an object which can be used for 404 page
        }
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