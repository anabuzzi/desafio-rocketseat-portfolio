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
    
    const about = {
        avatar_url: "https://i.ibb.co/G5XgTS5/Rocketseat.png",
        name: "Rocketseat",
        role: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description: 'No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa. <a href="https://www.rocketseat.com.br"  target="blank">Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Linkedin", url: "https://www.linkedin.com/school/rocketseat/" },
            {name: "Twitter", url: "https://twitter.com/rocketseat"},


        ]
    }

    return res.render("about", { about })

})

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", { items: videos })

})

server.listen (5001, function() {
})