let express = require('express');
let app = express();

assets = __dirname + '/public'
indexPage = __dirname + '/views/index.html'
apiResponse = {"message": "Hello json"}

app.use("/public", express.static(assets));

app.get("/", (req, res) => {
    res.sendFile(indexPage)
})

app.get("/json", (req, res) => {
    res.json(apiResponse)
})

module.exports = app
