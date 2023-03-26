import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  apiEndPoint ='http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(){
    return this.http.get(this.apiEndPoint + '/tasks');
  }

  addTask(newTask:any){
    return this.http.post(this.apiEndPoint + '/tasks',newTask);
  }
}
