let express = require('express');
let app = express();

indexPage = __dirname + '/views/index.html'

app.get("/", (req, res) => {
    res.sendFile(indexPage);
});

module.exports = app;
