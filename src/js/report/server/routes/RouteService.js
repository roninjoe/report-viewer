//const mysql = require('mysql');
 module.exports = class RouteService {

    constructor(){
        console.log("Entering RouteService::constructor");
    }

 static addDefaultRoutes(rs) {
        console.log("Entering RouteServer::addDefaultRoutes");

        // Set up a single test route for now. 
        rs.server.get('/api', (req, res) => {
            const sql = 'select * from report_viewer.report';
            rs.db.query(sql, (err, result) => {
                if(err) throw err;
                console.log(result);
                res.send(result);
            });
        }); 
    }

}
module.exports