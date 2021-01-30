const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require("./route");
const { json } = require('body-parser');
mongoose.connect("mongodb+srv://student:mohit8980@cluster0.gans7.mongodb.net/Book?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
()=>{
        const app = express();
        app.use("/api",route);
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(express.json());
        app.listen(process.env.PORT,()=>{
            console.log("Server Started on 3000 !!");
        });
    }
);
