import { taskInterface } from "./taskInterface";

class toDo implements taskInterface
{
    Tasks: string[]=[];
    addTask(task: string):number {
        let length:number = this.Tasks.push(task);
        console.log(task + " has been added");
        return length;
    }

    listAllTasks():void {
        this.Tasks.forEach((item) => {
        console.log(item + " is in our Tasks list!");

    })
    }

    deleteTask(task:string):number {
        let index = this.Tasks.indexOf(task); //to find index

        if(index > -1)
        {
        this.Tasks.splice(index, 1);//myArray.splice(wherever index is, how many elements to delete)
        console.log(task + " removed from task list");
        }
        else 
        {
            console.log(task + " is not in my task list ):");
        }
        return this.Tasks.length;
    }
}

let myToDo = new toDo();
myToDo.addTask("Clean");
myToDo.listAllTasks();
myToDo.deleteTask("Clean");