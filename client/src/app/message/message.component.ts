import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  title: String;

  ngOnInit() {
    this.getMessage();
  }

  getMessage(): void {
    this.messageService.getMessage().subscribe(response => this.title = response.message);
  }

}
