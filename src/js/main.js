const express = require('express');
const mysql = require('mysql');

console.log("Starting report-viewer::main");

const app = express();
app.use(express.static('./public'));


// app.get('/', (req, res) => {
//     res.send("hit route /");
// });
app.get('/api', (req, res) => {
    res.send("hit route /api");
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});