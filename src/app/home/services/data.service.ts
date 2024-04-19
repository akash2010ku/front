import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  formSubmit(data:any){
    this.http.post("http://localhost:3000/signUp",data).subscribe();
  }


  onSignIn(data:any){
    return this.http.post("http://localhost:3000/signIn",data)
  }


  fetchAllTodos(){
    return this.http.get("http://localhost:3000/getTodo")
  }


  InsertTodo(data:any){
    return this.http.post("http://localhost:3000/addTodo",data)
  }
}
