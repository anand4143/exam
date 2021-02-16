import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { passwordMatchValidator } from '../../shared/validation/password-match';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  model: User;
  title: string;
  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.title = "Signup form";;
    this.createForm();
  }
  createForm(){
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      firstName: ['', [Validators.required]],
      lastName: ['',[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passconf: ['', Validators. required],
      email: ['', [Validators.required, Validators.email]]
    }, {validators: passwordMatchValidator });
  }

  get f(){
    return this.signupForm.controls;
  }

  onSubmit(){
    console.log(this.signupForm.value);
    this.model = this.signupForm.value;
    this.authService.signup(this.model).subscribe(
      (result) => {
        if (! result.error){
          this.router.navigateByUrl('/');
        }
      }
    )
  }





}
