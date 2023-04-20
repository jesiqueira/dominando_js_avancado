const { Router } = require('express')
const routes = new Router()

routes.get('/hello', (req, res) => {
    return res.json({ message: 'hello' })
})

module.exports = routes