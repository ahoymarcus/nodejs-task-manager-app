const express = require('express');

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');



const router = express.Router();


// ROUTES
// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/taskss/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

router.route('/').get(getAllTasks);

router.route('/').post(createTask);

router.route('/:id').get(getTask);

router.route('/:id').patch(updateTask);

router.route('/:id').delete(deleteTask);




module.exports = router







