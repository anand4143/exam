import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { Router } from '@angular/router';
import { AuthService} from '../../auth/services/auth.service';
import { title } from 'process';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginFlag: any;
  constructor(private authenticationService:AuthenticationServiceService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
   let  currentUser = this.authenticationService.currentUser.subscribe(
     (user) =>{
      console.log("Header=====> ", user);
      if(user != null){
        this.loginFlag = true;
      }else{
        this.loginFlag = false;
      }
     });
   
  }
  login(){
    this.router.navigate(['/auth/login']);
  }

  logout(){
    // this.authService.setLoginFlag(false);
    this.authenticationService.logOut();
    this.router.navigateByUrl('/auth/login');
  }

}
