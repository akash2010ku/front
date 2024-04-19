import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../home/services/data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  signIn!:FormGroup;

  constructor(private fb:FormBuilder, private dataService:DataService,public activeModal: NgbActiveModal){}
  ngOnInit(): void {
    this.formInit();
  }


  formInit(){
    this.signIn=this.fb.group({
      
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)

    })
  }


  
  signInValid(){
    this.dataService.onSignIn(this.signIn.value).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.activeModal.close();
        
      }
    })
  }
}
