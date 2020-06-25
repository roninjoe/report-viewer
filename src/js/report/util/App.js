const fs = require('fs');
 module.exports = class App {

    constructor(){
        console.log("Entering App::constructor");
    }

    static loadConfig(configPath) {
        console.log("App::loadConfig");
        if (fs.existsSync(configPath)) {
            var config = JSON.parse(fs.readFileSync(configPath,'utf8'));
            return config;
            console.log("loaded config");
        } else {
            console.log(`ERROR: config not found ${configPath}`);
            throw "config was not found";
        }
    }
}