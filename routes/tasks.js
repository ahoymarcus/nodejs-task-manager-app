const express = require('express');

const { getAllTasks } = require('../controllers/tasks');



const router = express.Router();


// ROUTES
// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/task/:id')
// app.delete('/api/v1/task/:id')

router.route('/').get(getAllTasks);

router.route('/').post();

router.route('/:id').get




module.exports = router







