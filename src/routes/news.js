import express from "express";
import axios from "axios";
const newsRouter = express.Router();
const API_URL = "https://raddy.dev/wp-json/wp/v2/posts"
newsRouter.get("/", async (req,res) => {
    try {
        const result = await axios.get(`${API_URL}`)
        res.render("news", {
            articles : result.data
        })
        
    } catch (error) {
        if(error.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }else{
            console.err("Error", err.message);
            
        }
    }
})

export default newsRouter