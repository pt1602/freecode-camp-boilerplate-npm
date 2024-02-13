require('dotenv').config()

var bodyParser = require("body-parser");
let express = require('express');
let app = express();

assets = __dirname + '/public'
indexPage = __dirname + '/views/index.html'
jsonResponse = {"message": "Hello json"}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/public", express.static(assets));

app.get("/", (req, res) => {
    res.sendFile(indexPage)
})

app.get("*", (req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next()
})

app.get("/now", (req, res, next) => {
        req.time = new Date().toString();
        next();
    },
    (req, res) => {
        res.send({
            time: req.time
        });
    }
);

app.get("/:word/echo/", (req, res) => {
        res.send({
            echo: req.params.word
        });
    }
);

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }

    res.json(jsonResponse)
})

// app.route("/name").get((req, res) => {
//     res.json({
//         name: `${req.query.first} ${req.query.last}`
//     });
// })

app.post("/name", function(req, res) {
    let string = req.body.first + " " + req.body.last;
    res.json({ name: string });
});

module.exports = app
