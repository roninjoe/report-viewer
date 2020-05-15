const express = require('express');
const session = require('express-session');
const fs = require('fs');
const mysql = require('mysql');
const RouteService = require('./routes/RouteService');

 module.exports = class ReportServer {

    config = {};
    db = {};
    server = {};

    constructor(){
        console.log("Entering ReportServer::constructor");
        this.loadConfig();
        this.connectToDatabase();
        this.startServer();
    }

    loadConfig() {
        console.log("Entering ReportServer::LoadConfig");
        const configPath = "config/server-config.json";
        if (fs.existsSync(configPath)) {
            this.config = JSON.parse(fs.readFileSync(configPath,'utf8'));
            console.log("loaded config");
        } else {
            console.log("ERROR: missing config/server-config.json.");
            throw "server-config.json was not found";
        }
    }

    connectToDatabase() {
        console.log("Entering ReportServer::connectToDatabase");

        // Create a database connection
        this.db = mysql.createConnection({
         host     : this.config.dbHost,
         user     : this.config.dbUser,
         password : this.config.dbPassword,
         database : this.config.dbName
        });

        // Connect
        this.db.connect((err) => {
            if(err){
                throw err;
            }
            console.log('MySql Connected...');
        });
    }

    startServer() {
        console.log("Entering ReportServer::startServer");
        // Create an Express server.
        this.server = express();
        // Enable sessions
        this.server.use(session({
            secret : this.config.sessionSalt, 
            resave : false,
            saveUninitialized : false}));

        // Serve up the ui as static files   
        this.server.use(express.static('./public'));   
        
        // Set up the routes
        RouteService.addDefaultRoutes(this);

        // Start the server.
        this.server.listen(this.config.port, () => {
            console.log(`Server started on port ${this.config.port} `);
        });
    }

}