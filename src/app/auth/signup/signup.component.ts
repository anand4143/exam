import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { passwordMatchValidator } from '../../shared/validation/password-match';
import { CommonService } from 'src/app/services/common.service';
// import { HttpErrorHandler, HandleError} from '../../services/http-error-handler.service';
// import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  model: User;
  title: string;
  courses: any;
  defaultCourse: string = "Select course";
  err: any;
  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.title = "Let's Get Started";
    this.createForm();
    this.commonService.getAllCourses().subscribe(
      result => {
        console.log("====> ",result['course']);
        this.courses = result['course'];
      }
    );;

  }
  createForm(){
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      firstName: ['', [Validators.required]],
      lastName: ['',[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passconf: ['', Validators. required],
      email: ['', [Validators.required, Validators.email]],
      courses: [null, [Validators.required]],
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
        this.err = '';
        if (!result){
          this.router.navigateByUrl('/auth/login');
        }else{
          this.router.navigate(['/auth/login'],{queryParams:{msg: 'success'}});
        }
      },
      (error) => {
        this.err = error;
        console.log("Some error",error);
      }
    )
  }





}
