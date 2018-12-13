import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Message {
  constructor( public content: string, public sentBy: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.tipAdvisor;
  readonly client = new ApiAiClient({accessToken: this.token})

  conversation = new BehaviorSubject<Message[]>([]);



  constructor() { }

  talk() {
    this.client.textRequest('Who are you?')
      .then(res => console.log(res))
  }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
    .then(res => {
       const speech = res.result.fulfillment.speech;
       const botMessage = new Message(speech, 'bot');
       this.update(botMessage);
    });
  }
}
