import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task = <Task>{};

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    const StringId: string | null = this.route.snapshot.paramMap.get('id');
    if (!StringId) return
    const id: number = Number(StringId);
    this.taskService.get(id).subscribe((task: Task) => {
      this.task = task
    })
  }
}
