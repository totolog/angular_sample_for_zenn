import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

class TaskListElement extends Task {
  hovered: boolean = false;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: TaskListElement[] = [];

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskService.list().subscribe((tasks: Task[]) => {
      this.tasks = tasks.map((task: Task) => {
        return {
          ...task,
          hovered: false,
        }
      })
    })
  }

  hovered(task: TaskListElement): void {
    task.hovered = true
  };

  unhovered(task: TaskListElement): void {
    task.hovered = false
  };

}
