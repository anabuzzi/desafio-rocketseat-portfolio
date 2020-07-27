const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")


nunjucks.configure('views', {
    express: server
    
})


// até aqui o navegador procuaria o get, como o caminho não foi especificado
// lá no navegador aparece "cannot GET"
server.get("/", function(req, res) {
    return res.render("about")

})

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", { items: videos })

})

server.listen (5001, function() {
})