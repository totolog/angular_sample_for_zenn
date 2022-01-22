import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task!: Task;

  constructor() { }
  
  ngOnInit(): void {
    this.task = new Task(1, 'aaa', '高', '2022/2/1', "いいねを10つ増やす")
  }

}
