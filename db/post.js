const connection = require("./connection");

function getPostPreviews(callback) {
    const sql = `SELECT posts.* , authors.name  AS author_name, authors.image AS author_image, locations.* FROM posts JOIN authors ON authors.id = posts.author_id JOIN locations ON locations.id = posts.location_id`;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            callback(result);
        }
        
    });
}

function getPostById(id, callback) {
    const sql = `SELECT posts.* , authors.name  AS author_name, authors.image AS author_image, locations.* FROM posts JOIN authors ON authors.id = posts.author_id JOIN locations ON locations.id = posts.location_id WHERE posts.id = ?`;
    const params = [ id ];
    connection.query(sql, params, function(err, result) {
        callback(result[0]);
    });
}

function insertPost(post, callback) {
    const sql = `INSERT INTO posts (title, post, picture, author_id) VALUES(?, ?, ?, ?)`;   //insert the right values and parameters
    const params = [ post.title, post.description, post.picture, post.author_id ];                 //insert the right values and parameters

    connection.query(sql, params, function(err, result) {
        console.log(result);
        callback(result);
    });
}

module.exports = { getPostPreviews, getPostById, insertPost };