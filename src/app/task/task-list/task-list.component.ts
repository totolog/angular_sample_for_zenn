import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      new Task(1, 'zennのいいね数増', '小', '2022/2/1', "zennのいいねを50つにする"),
      new Task(2, 'twitterのフォロワー増', '中', '2022/3/1', "twitterのフォロワーを800人にする"),
      new Task(3, 'zennのフォロワー増', '中', '2022/4/1', "zennのフォロワーを30人にする"),
      new Task(4, 'Angularの勉強', '高', '2022/5/1', "Angularを使って1つwebアプリケーションを作成する"),
      new Task(5, 'Angular勉強会', '高', '2022/6/1', "初学者向けAngular勉強会を開く！")
    ]
  }

}
