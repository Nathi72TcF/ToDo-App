import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoTaskService {

  task = [];

  checks = true;
  tasks: string;
  priority: string;
  Date: string;

  constructor() { }

  newtask(tasks, priority, Date) {
    this.task.push({
      itemname : tasks,
      itempriority : priority,
      itemDate : Date
    });
    this.checks = false;
    this.tasks = '';
    this.priority = '';
    this.Date = '';
    alert ('New Task Added to My Task');
  }

  removetask(taskss) {
    const index = this.task.indexOf(taskss);
    this.task.splice(index,1);
    if (this.task.length <= 0) {
     this.checks = true;
    }
  }

  edittask(taskss) {
    const index = this.task.indexOf(taskss);
    const newztask = prompt('edit task', taskss.itemname);
    const newprior = prompt('edit priority', taskss.itempriority);
    const newzdate = prompt('edit Date', taskss.itemDate);
    if (newztask != null || newprior != null || newzdate != null) {
    this.task[index].itemname = newztask;
    this.task[index].itempriority = newprior;
    this.task[index].itemDate = newzdate;
    }
  }

  newDutie() {
    return this.task;
  }

}
