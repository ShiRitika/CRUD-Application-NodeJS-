// Creating HTTP Server
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

//connecting mongodatabase file
const connectDB = require("./server/database/connection");


// import { fileURLToPath } from "url";
// import { join, resolve } from "path"; //inbuilt module


// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

const app = express();// initialisation


dotenv.config({path : "config.env"});
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}));

//set view Engine
app.set("view engine","ejs"); //we had initialized view engine so no need to specify extension(.ejs) when call ejs file
// Set "views" directory for any views 
// being rendered res.render()
// app.set("views", path.resolve(__dirname, "views/ejs"));

//load assets
app.use("/css", express.static(path.resolve(__dirname,"assets/css")));
app.use("/img", express.static(path.resolve(__dirname,"assets/img")));
app.use("/js", express.static(path.resolve(__dirname,"assets/js")));

// app.use("/assets", express.static(join(__dirname, "../assets")));

//load routes
app.use("/",require("./server/routes/router"));

app.listen(PORT ,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});
