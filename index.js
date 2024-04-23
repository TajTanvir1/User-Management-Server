const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())

const users = [
   {id: 1, name: 'Sabana', email: 'sabana@mail.com'},
   {id: 2, name: 'sabnoor', email: 'sabnoor@mail.com'},
   {id: 3, name: 'Sabila', email: 'Sabila@mail.com'}
]

app.get('/', (req , res) => {
   res.send('Users Management Server is Running')
})


app.get('/users', (req,res)=>{
   res.send(users);
})

app.post('/users', (req, res)=>{
   console.log('post api hitting')
   console.log(req.body)
})

app.listen(port, ()=>{
   console.log(`Server in running on ${port}`)
})