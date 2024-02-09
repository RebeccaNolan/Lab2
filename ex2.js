//Array
var Tasks = [];
function addTask(task) {
    //arrStrings.push(task);
    var length = Tasks.push(task);
    console.log(task + " has been added");
    return length;
}
function listAllTasks() {
    //Tasks.forEach((item) => {
    //console.log(item + " is in our Tasks list!");
    // })
    for (var i = 0; i < Tasks.length; i++) {
        console.log(Tasks[i] + " is in our task list");
    }
}
function deleteTask(task) {
    var index = Tasks.indexOf(task); //to find index
    if (index > -1) {
        Tasks.splice(index, 1); //myArray.splice(wherever index is, how many elements to delete)
        console.log(task + " removed from task list");
    }
    else {
        console.log(task + " is not in my task list ):");
    }
    return Tasks.length;
}
addTask("Eat!");
listAllTasks();
deleteTask("Work!");
