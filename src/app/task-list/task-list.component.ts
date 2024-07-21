import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { title } from 'process';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {



  newTitle: string  = "";
  newDate: Date= new Date();

  taskList : Task[] = [];


  taskAdded () {


    if(this.newTitle.trim().length > 0 && this.newDate)  {
    let newTask: Task = {
        id: Date.now(),
        title:this.newTitle,
        date: this.newDate
    }

    this.taskList.push(newTask);

    this.newTitle= "";
    this.newDate= new Date();
  }else{
    alert("Please select a task and a date.");
  }
}


deleteTask(index:number){

    this.taskList.splice(index,index + 1);

    console.log("Task deleted");
    console.log(this.taskList);

    alert("Task deleted");
}





}
