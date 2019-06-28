import { MyTaskComponent } from './my-task/my-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'MyTask', component: MyTaskComponent },
  {path: 'NewTask', component: NewTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
