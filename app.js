// Step 1: Node Runtime Env Import
const express = require("express");
const morgan = require("morgan");
const path = 

// Browser Runtime Env Import
// import React from "react";

// Step 2: Create a New Express Server Instannce
const app = express();

    //Optional combine Steps 1 & 2
    // const app = require("express")();

// Step 3: Bring in Morgan Middleware
app.use(morgan("dev"));

// Step 4: Express.Static


// Step 5: Write 1st Route Handler
app.get("/", (req, res, next) => {
    console.log("Bonjou!")
    res.send(`
    <div>
        <h1>Welcome to Hacker News! </h1>
        <a href="/puppies"> Go to Hacker News</a>
    </div>
    `)
});

// Example Route
app.get("/puppies:puppyid", (request, response, next)=> {
    res.send(`<h1> `)
});

// Step 6: Boot up Express server by "listening" to itconst PORT = 3000;
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`We are cooking on port ${PORT}`)
});
