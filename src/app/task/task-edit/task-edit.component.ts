import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  taskForm = this.fb.group({
    id: [''],
    name: [''],
    priority: [''],
    deadline: [''],
    description: [''],
  })

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder, 
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.get(id).subscribe((task: Task) => {
      this.taskForm.setValue({
        id: task.id,
        name: task.name,
        priority: task.priority,
        deadline: task.deadline,
        description: task.description,
      });
    });
  }

  hundleSaveTask(): void {
    const {id, name, priority, deadline, description } = this.taskForm.getRawValue();
    this.taskService.update(new Task(id, name, priority, deadline, description));
    this.router.navigate(['/tasks', this.taskForm.controls['id'].value]);
  }

}
