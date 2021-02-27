import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  courseApiUrl = `${environment.apiUrls}/api/courses`;
  // private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient
    //private httpErrorHandler: HttpErrorHandler
    ) { 
    //this.handleError = this.httpErrorHandler.createHandleError('CommonService')
  }

  getAllCourses(){
    return this.http.get(`${this.courseApiUrl}/list`);
  }
}
