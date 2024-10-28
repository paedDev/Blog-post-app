import express from "express";
import axios from "axios";
const newsRouter = express.Router();
const API_URL = "https://raddy.dev/wp-json/wp/v2/posts/"
newsRouter.get("/", async (req,res) => {
    try {
        const result = await axios.get(`${API_URL}`)
        res.render("news", {
            articles : result.data
        })
        
    } catch (error) {
        if(error.response){
            res.render("news", {
                articles : null
            })
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else{
             res.render("news", {
                articles : null
            })
            console.error("Error", error.message);
            
        }
    }
})


newsRouter.get("/:id", async (req,res) => {
    let articleID = req.params.id
    try {
        const result = await axios.get(`${API_URL}${articleID}`)
        res.render("newsSingle", {
            article : result.data
        })
        
    } catch (error) {
        if(error.response){
            res.render("newsSingle", {
                article : null
            })
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else{
             res.render("newsSingle", {
                article : null
            })
            console.error("Error", error.message);
            
        }
    }
})
newsRouter.post("/", async (req,res) => {
    let search = req.body.search;
    try {
        const result = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`)
        res.render("newsSearch", {
            articles : result.data
        })
        
    } catch (error) {
        if(error.response){
            res.render("newsSearch", {
                articles : null
            })
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else{
             res.render("newsSearch", {
                articles: null
            })
            console.error("Error", error.message);
            
        }
    }
})
export default newsRouter