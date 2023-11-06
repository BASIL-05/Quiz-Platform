const express = require('express')
const app = express()
const port = 3000

const cors = require('cors'); 
app.use(cors()); 

require('./config/connection')
users = require('./config/users')

var userRouter = require('./routes/user');
app.use('/user',userRouter)

app.get('/', (req, res) => {
  res.send('Backend is live')
})

app.listen(port, '0.0.0.0',() => {
  console.log(`Listening on ${port}`)
})