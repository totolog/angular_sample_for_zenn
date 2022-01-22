import { Injectable } from '@angular/core';
import { Task } from 'src/app/model/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = [
    new Task(1, 'zennのいいね数増', '小', '2022/2/1', "zennのいいねを50つにする"),
    new Task(2, 'twitterのフォロワー増', '中', '2022/3/1', "twitterのフォロワーを800人にする"),
    new Task(3, 'zennのフォロワー増', '中', '2022/4/1', "zennのフォロワーを30人にする"),
    new Task(4, 'Angularの勉強', '高', '2022/5/1', "Angularを使って1つwebアプリケーションを作成する"),
    new Task(5, 'Angular勉強会', '高', '2022/6/1', "初学者向けAngular勉強会を開く！")
  ]

  constructor() { }

  list(): Observable<Task[]> {
    return of(this.tasks)
  }

  get(id: number): Observable<Task> {
    return of(this.tasks[id-1])
  }
}
