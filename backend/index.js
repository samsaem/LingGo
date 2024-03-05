// building nodejs and express server

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(3035, () => {
    console.log("Server running on port 3035");
});