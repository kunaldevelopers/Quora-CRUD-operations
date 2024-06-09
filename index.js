const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const port = 8080;
const { v4: uuidv4 } = require('uuid'); 
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

let posts = [
    {
        id : uuidv4(),
        username : "ApnaCollege",
        content : "Coding Skill"
    },
    {
        id : uuidv4(),
        username : "Arun",
        content : "Fighting Skill"
    },
    {
        id : uuidv4(),
        username : "Dholakpur",
        content : "Learning Skill"
    }
]

app.get("/posts", (req, res)=>{
    res.render("home.ejs", {posts});
});

app.get("/posts/new", (req, res)=>{
    res.render("form.ejs");
});

app.post("/posts", (req, res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id,username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

// For Editing Posts:
app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post);
    // res.send("Patch req Working")
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    console.log(`Post Deleted Of id:${id}`);
    res.redirect("/posts");
})

app.listen(port, (req, res)=>{
    console.log("Machine Started =====>>>>>>");
});