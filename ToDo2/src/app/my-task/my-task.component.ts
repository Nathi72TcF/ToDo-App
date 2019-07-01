import { ToDoTaskService } from './../Service/to-do-task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  checks = true;

  ArrayMyTask;

  constructor(public toDoTaskService: ToDoTaskService) {
    this.ArrayMyTask = this.toDoTaskService.newDutie();
   }

  ngOnInit() {
  }

  removetask(taskss) {
    this.toDoTaskService.removetask(taskss);
  }

   edittask(taskss) {
    this.toDoTaskService.edittask(taskss);
   }

}
