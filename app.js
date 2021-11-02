// https://www.youtube.com/watch?v=qwfE7fSVaZM
// 3º07'35''
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



const app = express();

// Middlewares
app.use(express.static('./public'));

// app.use(express.json());
app.use(bodyParser.json());



// ROUTES
// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')
app.use('/api/v1/tasks', tasks);



// 404 Middleware
app.use(notFound);

// Error handler middleware
app.use(errorHandlerMiddleware)



const port = process.env.PORT || 3000;

// Refatorar para sincronizar a inicialização
// do servidor à conexão com o DB......
const start = async () => {
	try {
		await connectDB(process.env.MONGODB_SRV);
		app.listen(port, console.log(`Server is listening on port ${port}`));
	} catch (error) {
		console.log(error);
	}
}


start();



