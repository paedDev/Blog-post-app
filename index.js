import express from "express";
import bodyParser from "body-parser";

import newsRouter from "./src/routes/news.js"
const app = express()
const port = 5000;


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use("/", newsRouter);
app.use("/article", newsRouter);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
})