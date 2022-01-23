import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  task: Task = <Task>{};

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.get(id).subscribe((task: Task) => {
      this.task = task;
    });
  }

  hundleSaveTask(): void {
    console.log(this.task);
    this.router.navigate(['/tasks']);
  }

}
