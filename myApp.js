let express = require('express');
let app = express();

assets = __dirname + '/public'
indexPage = __dirname + '/views/index.html'

app.use(express.static(assets));

app.get("/", (req, res) => {
    res.sendFile(indexPage)
})

module.exports = app
