// https://www.youtube.com/watch?v=qwfE7fSVaZM
// 9'21''

const express = require('express');
//const bodyParser = require('body-parser');

const tasks = require('./routes/tasks');



const app = express();

// Middlewares
app.use(express.json());
//app.use(bodyParser.json());



// ROUTES
// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')
app.get('/hello', (req, res) => {
	res.send('Task manager App');
});


app.use('/api/v1/tasks', tasks);






const port = 3000;

app.listen(port, console.log(`Server is listening on port${port}`));







