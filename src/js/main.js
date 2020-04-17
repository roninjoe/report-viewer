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

// Create an Express server.
const app = express();
// Enable sessions
app.use(session({
    secret : config.sessionSalt, 
    resave : false,
    saveUninitialized : false}));

 // Serve up the ui as static files   
app.use(express.static('./public'));

// Create a database connection
const db = mysql.createConnection({
    host     : config.dbHost,
    user     : config.dbUser,
    password : config.dbPassword,
    database : config.dbName
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

// Query 
app.get('/api', (req, res) => {
    let sql = 'select * from report_viewer.report';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/sessionCount', (req, res) => {
    if (req.session.page_views) {
        res.send("visit " + req.session.page_views++);
    } else {
        req.session.page_views = 1;
        res.send("first visit");
    }
    

});

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port} `);
});