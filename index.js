const express = require('express')
const app = express()

//middleware
let authMiddleware = function (req, res, next) {
    if (req.get('Authorization') !== 'Bearer 65a83e72c7e990a3e6565ae8b7cc071c') {
        res.status(403).send('No authorized')
    }

    next()
}

app.use(authMiddleware)

app.get('/user', async function (req, res) {
    res.status(200).send('OK')
})

app.listen(5005)