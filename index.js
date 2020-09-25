// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      const title = this.title;
      const complete = this.complete;
      console.log(`${title} has${complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
}
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {

}

// DRIVER CODE BELOW

let cleanCatLitter = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
let doLaundry = newTask("Do Laundry", "😨"); // task 1

cleanCatLitter.logState(); // Clean Cat Litter has not been completed
cleanCatLitter.completeTask();
cleanCatLitter.logState(); // Clean Cat Litter has been completed
