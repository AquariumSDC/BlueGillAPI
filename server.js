const QnA = require('./server/routes.js')
const express = require('express')
const app = express()
const port = 3000

app.use('/', QnA);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})