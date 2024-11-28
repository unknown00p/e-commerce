const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('hello express typescript')
})

app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`)
})