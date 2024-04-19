import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private modalService: NgbModal){}
  openSignUp() {
    const modalRef = this.modalService.open(SigninSignupComponent, {
      backdrop: false, size: 'lg',
      windowClass: 'modal fade register-modal'
    });



}

openSignIn() {
  const modalRef = this.modalService.open(SigninComponent, {
    backdrop: false, size: 'lg',
    windowClass: 'modal fade register-modal'
  });
}

}
