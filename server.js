const QnA = require('./server/routes.js')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use('/qa', QnA);

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})