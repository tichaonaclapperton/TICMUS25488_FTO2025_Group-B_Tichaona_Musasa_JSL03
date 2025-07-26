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
	
// ********* I am initialising object keys to the values which are the user input and add it the initialTasks array ******
	let task = {
		id: Number(taskId),
		title: taskTitle,
		description: taskDescription,
		Status: taskStatus,
	};

	initialTasks.push(task);



// Ask the user for the title and description of task 1
// const task1Title = prompt("Enter task 1 title:");


// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
