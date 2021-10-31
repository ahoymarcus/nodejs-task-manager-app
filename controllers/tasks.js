

const getAllTasks = (req, res) => {
	res.send('Get all tasks');
};

const createTask = (req, res) => {
	res.send('Task created');
};

const getTask = (req, res) => {
	res.send('Get single task');
};

const updateTask = (req, res) => {
	res.send('Update task');
};

const deleteTask = (req, res) => {
	
};




module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask
}

