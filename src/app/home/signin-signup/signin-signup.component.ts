import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.css'
})
export class SigninSignupComponent implements OnInit{

  reactiveForm!:FormGroup;
  

constructor(private fb:FormBuilder, private dataService:DataService,public activeModal: NgbActiveModal){}

  ngOnInit(): void {
    this.formInit();
   
  }


 
  


  formInit(){
    this.reactiveForm=this.fb.group({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)

    })

   

  





  }


  formData(){
    console.log(this.reactiveForm.value)
    this.dataService.formSubmit(this.reactiveForm.value)
    this.activeModal.close();
  }






}
