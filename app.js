// Step 1: Node Runtime Env Import
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const postBank = require("./postBank");

// Browser Runtime Env Import
// import React from "react";

// Step 2: Create a New Express Server Instannce
const app = express();

    //Optional combine Steps 1 & 2
    // const app = require("express")();

// Step 3: Bring in Morgan Middleware
app.use(morgan("dev"));

// Step 4a: Express.Static
const staticMiddleware = express.static(path.join(__dirname, "public"));
    // this is just adding /public to the entire dirname
    // now we have accesss to everything inside the public dir

// Setup 4b: Middleware Browser Handeler
app.use(staticMiddleware);
 

// Example

// app.get("/", (req, res, next) => {
//     res.send(`
//     <div>
//         <h1>Welcome to Hacker News! </h1>

//     </div>
//     `)
// });


// Step 5: Write 1st Route Handler
app.get("/", (req, res) => {
    // home path ./

    // posts = the data from the postBank.js we grabbed
    const posts = postBank.list();

    // data for actual page content, update after making
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
    </head>

    <body>
    <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
    ${posts.map(post => `
    <div class='news-item'>
      <p>
        <span class="news-position">${post.id}. ▲</span>${post.title}
        <small>(by ${post.name})</small>
      </p>
      <small class="news-info">
        ${post.upvotes} upvotes | ${post.date}
      </small>
    </div>`
  ).join('')}
</div>
</body>
</html>`
    // Here we have tagged the style.css in the header 

// Sending out the response
    res.send(html);
});


// Step 6: Boot up Express server by "listening" to itconst PORT = 3000;
//Port Variable
const PORT = 3000;

// Server listening
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});

// Understand what the ${post} . map is doing; review

// Notes
    // variable post here is POSTS
    // Not understanding how we imported the postBank.js
        // line 49?

// app.get("/", (req, res, next) => {
//     res.send(`
//     <div>
//         <h1>Welcome to Hacker News! </h1>

//     </div>
//     `)
// });
