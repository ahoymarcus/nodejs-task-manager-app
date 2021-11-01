// https://www.youtube.com/watch?v=qwfE7fSVaZM
// 1º11'03''
const express = require('express');
const bodyParser = require('body-parser');

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');



const app = express();

// Middlewares
// app.use(express.json());
app.use(bodyParser.json());



// ROUTES
app.get('/hello', (req, res) => {
	res.send('Task manager App');
});

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')
app.use('/api/v1/tasks', tasks);
require('dotenv').config();





const port = 3000;

// Refatorar para sincronizar a inicialização
// do servidor à conexão com o DB......
const start = async () => {
	try {
		await connectDB(process.env.MONGODB_SRV);
		app.listen(port, console.log(`Server is listening on port${port}`));
	} catch (error) {
		console.log(error);
	}
}


start();



