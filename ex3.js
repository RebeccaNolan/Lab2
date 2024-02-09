"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toDo = /** @class */ (function () {
    function toDo() {
        this.Tasks = [];
    }
    toDo.prototype.addTask = function (task) {
        var length = this.Tasks.push(task);
        console.log(task + " has been added");
        return length;
    };
    toDo.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (item) {
            console.log(item + " is in our Tasks list!");
        });
    };
    toDo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task); //to find index
        if (index > -1) {
            this.Tasks.splice(index, 1); //myArray.splice(wherever index is, how many elements to delete)
            console.log(task + " removed from task list");
        }
        else {
            console.log(task + " is not in my task list ):");
        }
        return this.Tasks.length;
    };
    return toDo;
}());
var myToDo = new toDo();
myToDo.addTask("Clean");
myToDo.listAllTasks();
myToDo.deleteTask("Clean");
