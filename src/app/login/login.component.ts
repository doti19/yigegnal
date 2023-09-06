import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';
import { SpinnerService } from 'app/shared/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  private redirect = '';
  error: boolean = false;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public spinnerService: SpinnerService
  ) { 
    if(this.authService.isLoggedIn){
      this.redirect = this.authService.redirect == ''? 'log-in': this.authService.redirect;
      this.router.navigate([this.redirect]);
    }
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  loginUser(){
    this.authService.signIn(this.signinForm.value);
  }


}
