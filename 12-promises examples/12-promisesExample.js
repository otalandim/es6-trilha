var fetch = require("node-fetch");
var posts = fetch('https://willianjusten.com.br/search.json');

// status da Promise: `pending`, `resolved` and `rejected`
setTimeout(() => {
    console.log(posts);
}, 5000);


posts
    .then(data => data.json())
    .then(data => data.map(post => {
        console.log(post.title);
    }))
    .catch(err => console.error(err));