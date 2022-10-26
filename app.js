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

// Step 4: Express.Static
const staticMiddlware = express.static(path.join(__dirname, "public"));
app.use(staticMiddlware);

// Step 5: Write 1st Route Handler

    //Home
app.get("/", (req, res, next) => {
    // console.log("Bonjou!")
    res.send(`
    <div>
        <h1>Welcome to Hacker News! </h1>

    </div>
    `)
});

// Scratch Post Bank
app.get("/", (req, res) => {
    // posts = the data from the postBank.js we grabbed
    const posts = postBank.list();

    // data for actual page content, update after making
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Wizard News</title>
    </head>
    <body>
    <ul>
        ${posts.map(posts => `<li>${data}</li>`)}
    </ul>
    
    
    </body>
    </html>`;

    // Sending out the response
    res.send(html);
});


// Example Route
// app.get("/puppies:puppyid", (req, res, next)=> {
//     res.send(`
//     <div>
//         <p> This is a puppy #${req.params.puppyId}</p>
//     </div> `)
// });

// Step 6: Boot up Express server by "listening" to itconst PORT = 3000;
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});

//Understand what the ${post} . map is doing; review

// Notes
    // variable post here is POSTS
    // Not understanding how we imported the postBank.js
        // line 49?
