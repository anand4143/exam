import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../auth/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private currentBehaviourSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  err: any;
  constructor(private http:HttpClient) {
    this.currentBehaviourSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentBehaviourSubject.asObservable();
   }

   public get currentUserValue():User {
    return this.currentBehaviourSubject.value;
   }

   login(username: string, password: string){
     let user = {
       email: username,
       password: password
     }
     return this.http.post<any>(`${environment.apiUrls}/api/auth/login`,user,this.httpOptions).pipe(map(
        (user)=>{
          localStorage.setItem('currentUser',JSON.stringify(user));
          this.currentBehaviourSubject.next(user);
          return user;
        },
        (error) => {
          console.log("auth service error===> ", error);
          this.err = error;
        }
      ));
   }

   logOut(){
     localStorage.removeItem('currentUser');
     this.currentBehaviourSubject.next(null);
   }
}
