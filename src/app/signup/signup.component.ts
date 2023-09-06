import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { 
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      role: [''],
    });
  }

  ngOnInit(): void {
  }

  registerUser(){
    this.authService.signUp(this.signupForm.value).subscribe((res)=>{
      if(res.user){
        this.signupForm.reset();
        this.router.navigate(['log-in']);

      }
    })
  }

}
