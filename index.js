const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (request, response, next) => {
  let target = (Math.round(Math.random() * 10) * 500) + 5000
  let raised = Math.round(Math.random() * target * 100) / 100
  let data = {
    'status': 'OK',
    'target': target,
    'raised': raised
  }
  response.json(data)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Error listening port', err)
  }

  console.log(`server is listening on ${port}`)
})
