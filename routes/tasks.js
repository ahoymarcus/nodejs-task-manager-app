// ROUTE
const express = require('express');

const { 
	getAllTasks, 
	createTask, 
	getTask, 
	updateTask, 
	deleteTask 
} = require('../controllers/tasks');



const router = express.Router();


// ROUTES
// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);




module.exports = router




