const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Backend is live')
})

app.post('/signup',(req,res)=>{
    userData = req.body
    res.send(req.body)
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})