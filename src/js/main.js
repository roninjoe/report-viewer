const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const fs = require('fs');

console.log("Starting report-viewer::main");

// Parse the configuration
const configPath = "config/server-config.json";
let config = {};
if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath,'utf8'));
} else {
    console.log("ERROR: missing config/server-config.json.");
    return;
}

const app = express();
app.use(session({
    secret : config.secret, 
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