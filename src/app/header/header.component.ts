import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SignupService]
})
export class HeaderComponent implements OnInit {
  showsuccessMessage: boolean = false;
  errorMessage : string = "";
  constructor(public signupService : SignupService) { }

  ngOnInit(): void {
  }
  
  onsubmit(Form : NgForm){
    this.signupService.postUser(Form.value).subscribe(
      res => {
        this.showsuccessMessage = true;
        setTimeout(()=> this.showsuccessMessage = false, 5000);
        this.resetForm(Form);
      },
      err => {
        if(err.status ==422){
          this.errorMessage= err.error.join('<br/>');          
        }
        else{
          this.errorMessage = "Something went wrong! Please contact admin";
        }
      }
    );
  }
  resetForm(Form : NgForm){
    this.signupService.selectedUser = {
      fullName:'',
      email:'',
      mobile:'',
      password:''
    };
    Form.resetForm();
    this.errorMessage='';
  }
}
