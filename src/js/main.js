import express, { static } from 'express';
import session from 'express-session';
import mysql from 'mysql';
import { existsSync, readFileSync } from 'fs';

console.log("Starting report-viewer::main");

// Parse the configuration
const configPath = "config/server-config.json";
let config = {};
if (existsSync(configPath)) {
    config = JSON.parse(readFileSync(configPath,'utf8'));
} else {
    console.log("ERROR: missing config/server-config.json.");
    return;
}

const app = express();
app.use(session({
    secret : config.sessionSalt, 
    resave : false,
    saveUninitialized : false}));

app.use(static('./public'));


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

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port} `);
});