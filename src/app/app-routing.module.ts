import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
