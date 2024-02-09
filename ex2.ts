//Array
let Tasks:string[] = [];

function addTask(task:string):number {
    //arrStrings.push(task);
    let length:number = Tasks.push(task);
    console.log(task + " has been added");
    return length;
}



function listAllTasks():void {
    //Tasks.forEach((item) => {
        //console.log(item + " is in our Tasks list!");
   // })

    for(let i = 0; i < Tasks.length; i++)
    {
        console.log(Tasks[i] + " is in our task list");
    }
}


function deleteTask(task:string):number {
    let index = Tasks.indexOf(task); //to find index

    if(index > -1)
    {
    Tasks.splice(index, 1);//myArray.splice(wherever index is, how many elements to delete)
    console.log(task + " removed from task list");
    }
    else 
    {
        console.log(task + " is not in my task list ):");
    }
    return Tasks.length;
}
addTask("Eat!");
listAllTasks();
deleteTask("Work!");