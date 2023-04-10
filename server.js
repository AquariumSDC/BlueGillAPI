const QnA = require('./server/routes.js')
const express = require('express')
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/qa', QnA);
app.use('/', (err, res) => res.send('Home Page Placeholder'));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})