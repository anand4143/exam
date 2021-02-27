import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 messages: string[] = [];

  add( message: string) {
    this.messages.push(message);
  }
  geterror(){
    console.log("message ser===> ",this.messages);
    return this.messages;
  }

  clear(){
    this.messages = [];
  }
}
