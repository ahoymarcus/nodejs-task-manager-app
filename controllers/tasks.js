// CONTROLLER
const Task = require('../models/task');



const getAllTasks = (req, res) => {
	res.json('Get all tasks');
};

const createTask = async(req, res) => {
	try {
		const task = await Task.create(req.body);
		
		// 201 - Successful POST
		res.status(201).json( task );
	} catch (error) {
		console.log(error);
		
		res.status(500).json({ msg: error });
	}
};

const getTask = (req, res) => {
	res.json({ "id": req.params.id });
};

const updateTask = (req, res) => {
	res.send('Update task');
};

const deleteTask = (req, res) => {
	res.send('Delete task');
};



module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask
}



