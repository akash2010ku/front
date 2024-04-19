import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../home/services/data.service';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrl: './todo-display.component.css'
})
export class TodoDisplayComponent implements OnInit{
  AllTodo:any;

constructor(private fb:FormBuilder, private dataService:DataService){}
  ngOnInit(): void {
   this.getAllTodos
  }

  
  getAllTodos(){
    this.AllTodo=[];
    this.dataService.fetchAllTodos().subscribe({
      next:(response)=>{
        console.log(response)
        this.AllTodo=response;
      }
    });
  }

}
