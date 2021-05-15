const express = require('express')
const path = require ('path')

var app = express()
app.set ('port', 5000)


app.use(express.static("build"))
app.disable('x-powered-by')


app.get ("/", function (req, res) {
    res.render(path.join(__dirname, "build"))
})

app.listen(app.get('port'), () => {
    console.log("listening on port "+app.get('port')+" ...")
})
