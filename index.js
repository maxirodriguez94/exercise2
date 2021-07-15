const express = require('express')
const fs = require('fs');
const app = express()

//middleware
let authMiddleware = function (req, res, next) {
    if (req.get('Authorization') !== 'Bearer 65a83e72c7e990a3e6565ae8b7cc071c') {
        res.status(403).send('No authorized')
    }

    next()
}

let logMiddleware = function (req, res, next) {

    const now = new Date()
    const date = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay() + '-' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()

    const newLog = [
        req.ip,
        date,
        req.method,
        req.path
    ].join(',')

    const fileName = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay() + '.log'

    fs.appendFileSync(fileName, newLog)
    fs.appendFileSync(fileName, '\r\n')

    next()
}

app.use(logMiddleware)
app.use(authMiddleware)

app.get('/user', async function (req, res) {
    res.status(200).send('OK')
})

app.post('/', function (req, res) {

})

app.listen(5006)