import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

import { AuthenticationServiceService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  submmited= false;
  returnUrl: string;
  err: any;
  successMsg: string;
  // checkLogin: any;

  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute, private authenticationService: AuthenticationServiceService, private router: Router,private authService: AuthService) {
    // if user already logged in redirect to dashboard
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);

    }
  }

  ngOnInit(): void {
    // this.checkLogin = this.authService.checkLoginOrNot();
    this.route.queryParams.subscribe( (params) => {
      let queryStr = params['msg'];
      if(queryStr=="success"){
        this.successMsg = "Please login with your credentials!"
      }
    });
    this.logInForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  get f() {
    return this.logInForm.controls;
  }

  onSubmit() {
    this.submmited = true;
    if (this.logInForm.invalid) {
     
      return;
    }
    this.authenticationService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
      .subscribe(
        data => {
          console.log("login component===> ", data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          
        });
  }

  
}
