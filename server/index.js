// we will creating server of Express so we need to import express
// in older nodejs we can import express as-->
// --> const express=require('express')
// but now node js has ES6 syntax so we can directly write as import statement as folllows
import express from "express";

//Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features


// to parse json
import bodyParser from "body-parser";

// always mention .js also on sever side
import Connection from "./database/db.js";


// creating app
const app=express();

//cors is cross origin resource sharing
// cors is browser specific error 
// it happens when we are sharing  data from two different servers or fort 
// here our frontend is on port 3000
// and backend on port 3001
//https://www.contentstack.com/docs/developers/how-to-guides/understanding-and-resolving-cors-error/#:~:text=The%20CORS%20behavior%2C%20commonly%20termed,from%20a%20potential%20security%20breach.
// to get rid of this we can use postman to hit api request
// or we can allow cors as follows
import cors from "cors";
app.use(cors());

  
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

//The app. use() method mounts or puts the specified middleware functions at the specified path. This middleware function will be executed only when the base of the requested path matches the defined path.
import Route from "./routes/route.js";


// to understand how does app.use() work read
//https://www.tutorialspoint.com/express-js-app-use-method
//https://youtu.be/lY6icfhap2os
app.use('/',Route);


Connection();

const PORT=3001;

// creating server for express app
app.listen(PORT,()=>{
    console.log(`server started on PORT ${PORT}`);
});
 
