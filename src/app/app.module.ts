import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from  './services/message.service';
import { JwtInterceptor } from  './services/jwt.interceptor';
import { ErrorInterceptor  } from  './services/error.interceptor';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    MessageService,
    CommonService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
