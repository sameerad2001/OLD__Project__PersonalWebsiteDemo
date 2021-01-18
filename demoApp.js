//  Express
const express = require("express");
const app = express();

//  Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

//  Lodash
const _ = require("lodash");

//  EJS
app.set("view engine", "ejs");

// https
const https = require("https");

//  Static Files
app.use(express.static("public"));

// Global Variables
let posts = [];

// Favicon ****************************************
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/sam.ico'));

// Home
app.get("/", (req, res) => {

    res.render("home");

});


// Compose
app.get("/compose", function(req, res) {

    res.render("compose");

});
app.post("/compose", function(req, res) {

    const post = {
        title: req.body.postTitle,
        text: req.body.postText
    }

    posts.push(post);

    res.redirect("/snippets")
})


// Contact 
app.get("/contact", (req, res) => {

    res.render("contact");

});
//  ********************************** Mail Chimp ***********************************
// Api Key : ABC-us5
// URL :  https://<dc>.api.mailchimp.com/3.0/lists
// Audience or List Id :  XYZ
app.post("/contact", function(req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {

        members: [{
            email_address: email,
            status: "subscribed",

            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]

    }

    const jsonData = JSON.stringify(data);

    const url = "https://us5.api.mailchimp.com/3.0/lists/XYZ";
    const option = {
        method: "POST",
        auth: "ABC-us5"
    };

    const request = https.request(url, option, function(response) {

        console.log(response.statusCode);

        if (response.statusCode === 200) {
            console.log("subscribed");
            res.redirect("/success");
        } else {
            console.log("not subscribed");
            res.redirect("/fail");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.get("/success", function(req, res) {
    res.render("success");
});

app.get("/fail", function(req, res) {
    res.render("fail");
})


// Projects
app.get("/projects", function(req, res) {
    res.render("projects");
})


// Snippets
app.get("/snippets", function(req, res) {

    res.render("snippets", {
        posts: posts
    });

});
// Single Snippet Express Routing Parameters
app.get("/:postName", function(req, res) {

    // Convert to lower Case
    const requested = _.lowerCase(req.params.postName);

    // let flag = 0;

    posts.forEach(function(post) {

        if (_.lowerCase(post.title) === requested) {

            console.log("Snippet Found");

            res.render("snippet", {
                post: post
            });

            // flag = 1;
        }

    });

    // if (!flag) {
    //     console.log("Snippet Not Found")
    // }

});


app.listen("3000", () => {
    console.log("Server Started on port 3000");
})