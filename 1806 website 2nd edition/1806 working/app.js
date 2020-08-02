const express = require("express")
const response = require("express")
const app = express()

app.use(express.static("Public"))

app.get("/Public/index.html", function (request, response) {
    response.send('index.html')
})

// app.get("/", function (request, response) {
//     response.send('<h1 style="background-color:red;color:blue">Hello there</h1>')
// })


const port = 3000

app.listen(port, function () {
    console.log(`express server is listening on port localhost:${port}`)
})
