const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
// setting up an endpoint that sends a file for the website to read and we are smushing two files pathes together
// dirname = directory name; the file path of the folder you are currently in
// joining server/index.js with html


const port = process.env.PORT || 4005
// giving us the option for two different port #'s


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})