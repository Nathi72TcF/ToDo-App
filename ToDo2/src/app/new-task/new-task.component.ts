import { ToDoTaskService } from './../Service/to-do-task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  ArrayMyTask;

  constructor(public toDoTaskService: ToDoTaskService) {
    this.ArrayMyTask = this.toDoTaskService.newDutie();
   }

   newtask(tasks, priority, Date) {
    this.toDoTaskService.newtask(tasks, priority, Date);
    }

  ngOnInit() {
  }

}
