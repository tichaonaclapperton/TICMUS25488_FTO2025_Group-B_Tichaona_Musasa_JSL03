// ******** thats the 3 user task that i was given as starter code *******

const initialTasks = [
	{
		id: 1,
		title: "Launch Epic Career",
		description: "Create a killer Resume",
		Status: "todo",
	},
	{
		id: 2,
		title: "Master JavaScript",
		description: "Get comfortable with the fundamentals",
		Status: "doing",
	},
	{
		id: 3,
		title: "Contribute to Open Source Projects",
		description:
			"Gain practical experience and collaborate with others in the software development community",
		Status: "done",
	},
];

// ********* This loop makes sure that the user tasks starts from 4 up to 6 then it breaks out of the loop *******

for (let i = 4; i < 7; i++) {
	const taskId = `${i}`;
	const taskTitle = prompt(`Enter task ${i} title:`);
	const taskDescription = prompt(`Enter task ${i} description:`);
  let taskStatus = prompt(`Enter task ${i} Status:`);
	
// ********* Initialising object keys to the values which are the user input and add it the initialTasks array ******
	let task = {
		id: Number(taskId),
		title: taskTitle,
		description: taskDescription,
		Status: taskStatus,
	};

	initialTasks.push(task);

  // ********  Keep asking until the user enters a valid status for task **********

  while (taskStatus !== 'done' && taskStatus !== 'doing' && taskStatus !== 'todo') {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    taskStatus = prompt(`Enter task ${i} status(todo,doing,done):`).toLowerCase();
  }

}

console.log("All taskes:");
console.log(initialTasks);
alert(
	"There are enough tasks on your board, please check them in the console."
);

// *******Function to Filter all done statuses and store it in commpletedTasks********


function filterDoneStatus (initialTasks) {
  return  initialTasks.filter(task => task.Status === 'done');
}

let commpletedTasks = filterDoneStatus(initialTasks)

console.log('completed tasks:')
console.log(commpletedTasks)


