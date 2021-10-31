const mongoose = require('mongoose');
require('dotenv').config();



const connectionString = process.env.MONGODB_SRV;

mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(() => {
		console.log('Connected to DB.....')
	})
	.catch((err) => {
		console.log(err)
	});



 

