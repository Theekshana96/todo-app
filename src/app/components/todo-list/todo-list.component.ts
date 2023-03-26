import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  myTaskList: any = [];
  taskId: string = '';
  taskName: string = '';
  taskStatus: string = '';

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.getMyTaskLists();
  }

  getMyTaskLists() {
    this.todoListService.getTasks().subscribe((res: any) => {
      this.myTaskList = res.data;
      //console.log(this.myTaskList);
    });
  }

  addTask() {
    let newTask = {
      name: this.taskName,
      status: this.taskStatus,
    };
    this.todoListService.addTask(newTask).subscribe((res: any) => {
      this.getMyTaskLists();
      this.taskId = '';
      this.taskName = '';
      this.taskStatus = '';
    });
  }
}
