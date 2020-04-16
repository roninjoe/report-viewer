const express = require('express');
const session = require('express-session');
const mysql = require('mysql');

console.log("Starting report-viewer::main");

const app = express();
app.use(session({
    secret : "putSecretHere", 
    resave : false,
    saveUninitialized : false}));

app.use(express.static('./public'));


// app.get('/', (req, res) => {
//     res.send("hit route /");
// });
app.get('/api', (req, res) => {
    if (req.session.page_views) {
        res.send("visit " + req.session.page_views++);
    } else {
        req.session.page_views = 1;
        res.send("first visti to route /api");
    }
    

});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});