import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../home/services/data.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent  implements OnInit{
  insertTodo!: FormGroup;

  constructor(private fb:FormBuilder, private dataService:DataService){}


  ngOnInit(): void {
    this.formInit()
  }


  formInit(){
    this.insertTodo=this.fb.group({
      
      title:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required)

    })
  }

  NewTodo(){
    this.dataService.InsertTodo(this.insertTodo.value).subscribe({
      next:(response)=>{
        console.log(response);
        
      }
    })
   
  }

}
