import { Injectable } from '@angular/core';
//Parte 4: paso 14: se crea el message.service.ts con el monda ng generate service message y se agrega el inyectable.
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
