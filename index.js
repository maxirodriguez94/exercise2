const express = require('express')
const app = express()

//middleware
 let logUser = function (req, res, next) {
     let user = 'Autorizacion'
    if (user.includes(req.get('Autorizacion'))) {
        res.status(403).send('')
    } else return res.send('test')

    next()
} 

app.use(logUser)

app.get('/user', async function (req, res) {
    res.send('asd')
})

app.get('/Autorizacion', async function (req, res) {

res.send('asd')

})

app.listen(5004)