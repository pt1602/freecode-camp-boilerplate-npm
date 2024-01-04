require('dotenv').config()

let express = require('express');
let app = express();

assets = __dirname + '/public'
indexPage = __dirname + '/views/index.html'
jsonResponse = {"message": "Hello json"}

app.use("/public", express.static(assets));

app.get("*", (req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
})

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }

    res.json(jsonResponse)
})

module.exports = app
