import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  task = [];
  // task = [{itemname:"",itempriority:""}];
  checks = true;
  tasks : string = '';
  priority : string = '';

  newtask() {
    this.task.push({itemname : this.tasks, itempriority : this.priority});
    this.checks = false;
    this.tasks = '';
    this.priority = '';
  }

  removetask(taskss) {
    // let index = this.task.indexOf(taskss)
    // this.task.splice(index,1);

    let index = this.task.indexOf(taskss)
    this.task.splice(index,1);
    if (this.task.length <= 0) {
      this.checks = true;
    }
  }

  edittask(taskss) {
    // 1st lesson code
    // let index = this.task.indexOf(taskss)
    // this.task[index] = prompt("edit task",taskss)
    
    //  2nd lesson code
    let index = this.task.indexOf(taskss)
    let newztask = prompt("edit task",taskss.itemname)
    let newprior = prompt("edit priority",taskss.itempriority)
    if (newztask != null || newprior != null) {
    this.task[index].itemname = newztask
    this.task[index].itempriority = newprior
    }

  }
}
