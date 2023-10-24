import { Component, OnInit } from '@angular/core';
//Parte 4: paso 18: Se importa el message.service
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //Parte 4 paso 19: Se modifica el constructor con un parametro que declare una propiedad messageService publica.
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
