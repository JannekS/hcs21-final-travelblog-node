const post = require("../db/post");
const serverURL = process.env.BASE_URL;

function servePreviews(req, res) {
    post.getPostPreviews(function(result) {
        
        if (result) {

            result.forEach(blogPost => {
                blogPost.author_image = serverURL + blogPost.author_image;
                blogPost.image = serverURL + blogPost.image;
            });
            
            result.status = "Ok";

            res.json(result);
        } else {
            res.json({status: "Failed" });
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
            result.author_image = serverURL + result.author_image;
            result.image = serverURL + result.image;
            res.json(result);
        } else {
            
            res.json({status: "Failed" });
        }
    });
}

module.exports = { servePreviews, servePost };